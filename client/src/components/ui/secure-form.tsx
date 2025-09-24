import * as React from "react";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { sanitizeTextInput, validateUrl } from "@/lib/security";
import { 
  Form, 
  FormControl, 
  FormField, 
  FormItem, 
  FormLabel, 
  FormMessage 
} from "@/components/ui/form";

/**
 * Secure form validation schemas
 */
export const contactFormSchema = z.object({
  name: z
    .string()
    .min(1, "Name is required")
    .max(100, "Name must be less than 100 characters")
    .refine((val) => !/[<>'"&]/.test(val), "Invalid characters in name"),
  
  email: z
    .string()
    .min(1, "Email is required")
    .email("Please enter a valid email address")
    .max(254, "Email must be less than 254 characters"),
  
  phone: z
    .string()
    .optional()
    .refine((val) => !val || /^[\d\s\-\+\(\)]+$/.test(val), "Invalid phone number format"),
  
  company: z
    .string()
    .optional()
    .refine((val) => !val || (val.length <= 100 && !/[<>'"&]/.test(val)), "Invalid company name"),
  
  message: z
    .string()
    .min(1, "Message is required")
    .max(1000, "Message must be less than 1000 characters")
    .refine((val) => !/[<>'"&]/.test(val), "Invalid characters in message"),
  
  website: z
    .string()
    .optional()
    .refine((val) => !val || validateUrl(val), "Please enter a valid URL"),
});

export type ContactFormData = z.infer<typeof contactFormSchema>;

/**
 * Secure Input component with built-in sanitization
 */
interface SecureInputProps extends Omit<React.ComponentProps<typeof Input>, 'onChange'> {
  value?: string;
  onChange?: (value: string) => void;
}

export const SecureInput = React.forwardRef<HTMLInputElement, SecureInputProps>(
  ({ value, onChange, ...props }, ref) => {
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const sanitized = sanitizeTextInput(e.target.value);
      onChange?.(sanitized);
    };

    return (
      <Input
        {...props}
        ref={ref}
        value={value}
        onChange={handleChange}
        data-testid={`input-${props.name || 'secure'}`}
      />
    );
  }
);
SecureInput.displayName = "SecureInput";

/**
 * Secure Textarea component with built-in sanitization
 */
interface SecureTextareaProps extends Omit<React.ComponentProps<typeof Textarea>, 'onChange'> {
  value?: string;
  onChange?: (value: string) => void;
}

export const SecureTextarea = React.forwardRef<HTMLTextAreaElement, SecureTextareaProps>(
  ({ value, onChange, ...props }, ref) => {
    const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
      const sanitized = sanitizeTextInput(e.target.value);
      onChange?.(sanitized);
    };

    return (
      <Textarea
        {...props}
        ref={ref}
        value={value}
        onChange={handleChange}
        data-testid={`textarea-${props.name || 'secure'}`}
      />
    );
  }
);
SecureTextarea.displayName = "SecureTextarea";

/**
 * Example Secure Contact Form Component
 */
interface SecureContactFormProps {
  onSubmit: (data: ContactFormData) => Promise<void>;
  isLoading?: boolean;
}

export const SecureContactForm: React.FC<SecureContactFormProps> = ({
  onSubmit,
  isLoading = false
}) => {
  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      company: "",
      message: "",
      website: "",
    },
  });

  const handleSubmit = async (data: ContactFormData) => {
    // Additional sanitization before submission
    const sanitizedData: ContactFormData = {
      name: sanitizeTextInput(data.name),
      email: data.email.trim().toLowerCase(),
      phone: data.phone?.replace(/[^\d\s\-\+\(\)]/g, "") || "",
      company: data.company ? sanitizeTextInput(data.company) : "",
      message: sanitizeTextInput(data.message),
      website: data.website && validateUrl(data.website) ? data.website : "",
    };

    await onSubmit(sanitizedData);
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Name *</FormLabel>
                <FormControl>
                  <SecureInput
                    placeholder="Your full name"
                    {...field}
                    data-testid="input-name"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email *</FormLabel>
                <FormControl>
                  <Input
                    type="email"
                    placeholder="your.email@example.com"
                    {...field}
                    data-testid="input-email"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Phone</FormLabel>
                <FormControl>
                  <SecureInput
                    placeholder="+1 (555) 123-4567"
                    {...field}
                    data-testid="input-phone"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="company"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Company</FormLabel>
                <FormControl>
                  <SecureInput
                    placeholder="Your company name"
                    {...field}
                    data-testid="input-company"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <FormField
          control={form.control}
          name="website"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Website</FormLabel>
              <FormControl>
                <Input
                  type="url"
                  placeholder="https://www.example.com"
                  {...field}
                  data-testid="input-website"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Message *</FormLabel>
              <FormControl>
                <SecureTextarea
                  placeholder="Tell us about your antifouling paint needs..."
                  className="min-h-[120px]"
                  {...field}
                  data-testid="textarea-message"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button
          type="submit"
          className="w-full"
          disabled={isLoading}
          data-testid="button-submit"
        >
          {isLoading ? "Sending..." : "Send Message"}
        </Button>
      </form>
    </Form>
  );
};
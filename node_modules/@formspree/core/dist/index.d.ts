import { PaymentMethodResult, Stripe } from '@stripe/stripe-js';

declare function appendExtraData(formData: SubmissionData, prop: string, value: string): void;

type SubmissionData<T extends FieldValues = FieldValues> = FormData | T;
type FieldValues = Record<string, string | number | boolean | null | undefined>;
type SubmissionOptions = {
    clientName?: string;
    createPaymentMethod?: () => Promise<PaymentMethodResult>;
    endpoint?: string;
};
type SubmissionResult<T extends FieldValues> = SubmissionSuccess | SubmissionError<T>;
declare class SubmissionSuccess {
    readonly kind = "success";
    readonly next: string;
    constructor(serverResponse: ServerSuccessResponse);
}
type ServerSuccessResponse = {
    next: string;
};
declare function isSubmissionError<T extends FieldValues>(result: SubmissionResult<T>): result is SubmissionError<T>;
declare class SubmissionError<T extends FieldValues> {
    readonly kind = "error";
    private readonly formErrors;
    private readonly fieldErrors;
    constructor(...serverErrors: ServerError[]);
    getFormErrors(): readonly FormError[];
    getFieldErrors<K extends keyof T>(field: K): readonly FieldError[];
    getAllFieldErrors(): readonly [keyof T, readonly FieldError[]][];
}
type FormError = {
    readonly code: FormErrorCode | 'UNSPECIFIED';
    readonly message: string;
};
type FormErrorCode = ValueOf<typeof FormErrorCodeEnum>;
declare const FormErrorCodeEnum: {
    readonly BLOCKED: "BLOCKED";
    readonly EMPTY: "EMPTY";
    readonly FILES_TOO_BIG: "FILES_TOO_BIG";
    readonly FORM_NOT_FOUND: "FORM_NOT_FOUND";
    readonly INACTIVE: "INACTIVE";
    readonly NO_FILE_UPLOADS: "NO_FILE_UPLOADS";
    readonly PROJECT_NOT_FOUND: "PROJECT_NOT_FOUND";
    readonly TOO_MANY_FILES: "TOO_MANY_FILES";
};
type FieldError = {
    readonly code: FieldErrorCode | 'UNSPECIFIED';
    readonly message: string;
};
type FieldErrorCode = ValueOf<typeof FieldErrorCodeEnum>;
declare const FieldErrorCodeEnum: {
    readonly REQUIRED_FIELD_EMPTY: "REQUIRED_FIELD_EMPTY";
    readonly REQUIRED_FIELD_MISSING: "REQUIRED_FIELD_MISSING";
    readonly STRIPE_CLIENT_ERROR: "STRIPE_CLIENT_ERROR";
    readonly STRIPE_SCA_ERROR: "STRIPE_SCA_ERROR";
    readonly TYPE_EMAIL: "TYPE_EMAIL";
    readonly TYPE_NUMERIC: "TYPE_NUMERIC";
    readonly TYPE_TEXT: "TYPE_TEXT";
};
type ServerError = {
    code?: string;
    details?: Record<string, string>;
    field?: string;
    message: string;
};
type ValueOf<T> = T[keyof T];

interface Config {
    project?: string;
    stripe?: Stripe;
}
declare class Client {
    project: string | undefined;
    stripe: Stripe | undefined;
    private readonly session?;
    constructor(config?: Config);
    /**
     * Submit a form.
     *
     * @param formKey - The form key.
     * @param data - An object or FormData instance containing submission data.
     * @param args - An object of form submission data.
     */
    submitForm<T extends FieldValues>(formKey: string, data: SubmissionData<T>, opts?: SubmissionOptions): Promise<SubmissionResult<T>>;
}
/**
 * Constructs the client object.
 */
declare const createClient: (config?: Config) => Client;
/**
 * Fetches the global default client.
 */
declare const getDefaultClient: () => Client;

export { Client, Config, FieldErrorCode, FieldValues, FormErrorCode, SubmissionData, SubmissionError, SubmissionOptions, SubmissionResult, SubmissionSuccess, appendExtraData, createClient, getDefaultClient, isSubmissionError };

export { CardElement } from '@stripe/react-stripe-js';
import React$1, { ComponentPropsWithoutRef, ReactNode } from 'react';
import { FieldValues, SubmissionError, Client, SubmissionSuccess, SubmissionData } from '@formspree/core';

type ValidationErrorProps<T extends FieldValues> = {
    errors: SubmissionError<T> | null;
    field?: keyof T;
    prefix?: string;
} & ComponentPropsWithoutRef<'div'>;
declare function ValidationError<T extends FieldValues>(props: ValidationErrorProps<T>): React$1.JSX.Element | null;

type FormspreeContextType = {
    client: Client;
};
type FormspreeProviderProps = {
    children: ReactNode;
    project?: string;
    stripePK?: string;
};
/**
 * FormspreeProvider creates Formspree Client based on the given props
 * and makes the client available via context.
 */
declare function FormspreeProvider(props: FormspreeProviderProps): React$1.JSX.Element;
declare function useFormspree(): FormspreeContextType;

/**
 * ExtraData values can be strings or functions that return a string, or a
 * promise that resolves to a string. Errors should be handled internally.
 * Functions can return undefined to skip this ExtraData value.
 */
type ExtraDataValue = undefined | string | (() => string) | (() => Promise<string>) | (() => undefined) | (() => Promise<undefined>);
type ExtraData = {
    [key: string]: ExtraDataValue;
};

type Options<T extends FieldValues> = {
    client?: Client;
    extraData?: ExtraData;
    onError?: (error: SubmissionError<T>) => void;
    onSuccess?: (data: SubmissionSuccess) => void;
    origin?: string;
};
type FormEvent = React.FormEvent<HTMLFormElement>;
type SubmitHandler<T extends FieldValues> = (submission: FormEvent | SubmissionData<T>) => Promise<void>;
declare function useSubmit<T extends FieldValues>(formKey: string, options?: Options<T>): SubmitHandler<T>;

type ResetFunction = () => void;
type TUseForm<T extends FieldValues> = [
    {
        errors: SubmissionError<T> | null;
        result: SubmissionSuccess | null;
        submitting: boolean;
        succeeded: boolean;
    },
    SubmitHandler<T>,
    ResetFunction
];
declare function useForm<T extends FieldValues>(formKey: string, args?: {
    client?: Client;
    data?: ExtraData;
    endpoint?: string;
}): TUseForm<T>;

export { ExtraData, ExtraDataValue, FormspreeContextType, FormspreeProvider, FormspreeProviderProps, TUseForm, ValidationError, ValidationErrorProps, useForm, useFormspree, useSubmit };

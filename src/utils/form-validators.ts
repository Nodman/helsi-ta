const PHONE_RE = /^\+38\s?\(\d\d\d\)\s?\d\d\d[-\s]?\d\d[-\s]?\d\d$/;
const EMAIL_RE = /^\w[\w.-_+]{0,}\w@\w[\w.-_]{0,}\w/;
const DOMAIN_ZONE_RE = /.*\.[a-zA-Z]{2,}$/;
const ID_RE = /^([a-zA-Z]{2})?\d{9}$/;

type ReturnT = string | void;

export const required = <V extends unknown>(value: V | void): ReturnT => {
  if (value == null) {
    return "Поле не може бути пустим";
  }
};

export const minLength =
  (length: number) =>
  (value: string): ReturnT => {
    if (value.length < length) {
      return `Поле не можe бути коротше ніж ${length} символів`;
    }
  };

export const maxLength =
  (length: number) =>
  (value: string): ReturnT => {
    if (value.length > length) {
      return `Поле не може бути довшим ніж ${length} символів`;
    }
  };

export const exactLength =
  (length: number) =>
  (value: string): ReturnT => {
    if (minLength(length)(value) || maxLength(length)(value)) {
      return `Поле має містити ${length} символів`;
    }
  };

export const phone = (value: string) => {
  if (!PHONE_RE.test(value)) {
    return "Некоректний номер телефона. Приклад: +38 (093) 999-88-77";
  }
};

export const email = (value: string) => {
  if (!EMAIL_RE.test(value)) {
    return "Некоректнa електронна адреса. Приклад example@example.com";
  }
};

export const domain = (message?: string) => (value: string) => {
  if (!DOMAIN_ZONE_RE.test(value)) {
    return message ?? "Некоректнa адреса";
  }
};

export const id = (value: string) => {
  if (!ID_RE.test(value)) {
    if (/[a-zA-Z]/.test(value)) {
      return "Некоректний формат";
    }

    return "Некоректний формат, поле має містити 9 цифр";
  }
};

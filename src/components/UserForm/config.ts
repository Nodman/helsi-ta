import { FormConfigT } from "../RFFForm/useFormConfig";

import {
  minLength,
  phone,
  email,
  domain,
  id,
} from "../../utils/form-validators";
import { phoneFormatter } from "../../utils/form-formatters";

export const userFormConfig: FormConfigT = {
  secondName: {
    type: "text",
    label: "Прізвище",
    withAsterisk: true,
  },
  name: {
    type: "text",
    label: "Ім'я",
    withAsterisk: true,
  },
  middleName: {
    type: "text",
    label: "По батькові",
    disabledDescription: "немає по батькві згідно з документів",
    withToggle: true,
    withAsterisk: true,
  },
  taxId: {
    type: "text",
    label: "РНОКПП(ІПН)",
    validate: minLength(9),
    disabledDescription: "немає ІПН за віком чи має відмітку у паспорті",
    withToggle: true,
    withAsterisk: true,
  },
  birthDate: {
    type: "date",
    label: "Дата народження",
    withAsterisk: true,
  },
  sex: {
    type: "select",
    label: "Стать",
    withAsterisk: true,
    data: [
      {
        label: "Жіноча",
        value: "female",
      },

      {
        label: "Чоловіча",
        value: "male",
      },
    ],
  },
  country: {
    type: "text",
    label: "Країна народження",
    withAsterisk: true,
    validate: minLength(4),
  },
  region: {
    type: "text",
    label: "Місце народження",
    withAsterisk: true,
  },
  contactMethod: {
    type: "select",
    label: "Бажаний спосіб зв'язку",
    withAsterisk: true,
    data: [
      {
        label: "Електронна пошта",
        value: "email",
      },

      {
        label: "Телефон",
        value: "phone",
      },
    ],
  },
  secret: {
    type: "text",
    label: "Секретне слово",
    validate: minLength(6),
    withAsterisk: true,
  },
  phone: {
    type: "text",
    label: "Контактний номер телефону",
    placeholder: "+38 (___) ___-__-__",
    parse: phoneFormatter,
    validate: phone,
    withAsterisk: true,
  },
  email: {
    type: "text",
    label: "Адреса електронної пошти",
    placeholder: "example@example.com",
    validate: [email, domain("Некоректний домен. Приклад example@example.com")],
    withAsterisk: true,
  },
  idType: {
    type: "select",
    label: "Тип документу",
    withAsterisk: true,
    data: [
      {
        label: "Посвідчення особи яка потребує додаткового захисту",
        value: "addSecurityCard",
      },

      {
        label: "Паспорт (ID-картка)",
        value: "idCard",
      },

      {
        label: "Паспорт (книжечка)",
        value: "passport",
      },

      {
        label: "Посвідка на постійне проживання в Україні",
        value: "permanentResidencePermit",
      },

      {
        label: "Посвідка біженця",
        value: "refugeeCard",
      },

      {
        label: "Посвідка на проживання",
        value: "residencePermit",
      },

      {
        label: "Тимчасове посвідчення громадянина України",
        value: "temporaryCitizenshipCard",
      },
    ],
  },
  idNumber: {
    type: "text",
    label: "Серія (за наявності), номер",
    validate: id,
    withAsterisk: true,
  },
  issueDate: {
    type: "date",
    label: "Коли видано",
    withAsterisk: true,
  },
  expirationDate: {
    type: "date",
    label: "Діє до",
    withAsterisk: true,
  },
  issuedBy: {
    type: "text",
    label: "Ким видано",
    withAsterisk: true,
  },
  demographicId: {
    type: "text",
    label: "Запис № (УНЗР)",
    placeholder: "РРРРММДД-ХХХХХ",
    withAsterisk: true,
  },
};

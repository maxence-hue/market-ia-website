import { defineConfig } from "tinacms";

// Your hosting provider likely exposes this as an environment variable
const branch = process.env.HEAD || process.env.VERCEL_GIT_COMMIT_REF || "main";

export default defineConfig({
  branch,
  clientId: process.env.NEXT_PUBLIC_TINA_CLIENT_ID || "", // À configurer sur Tina Cloud
  token: process.env.TINA_TOKEN || "", // À configurer sur Tina Cloud
  build: {
    outputFolder: "admin",
    publicFolder: "public",
  },
  media: {
    tina: {
      mediaRoot: "images",
      publicFolder: "public",
    },
  },
  schema: {
    collections: [
      {
        name: "post",
        label: "Articles de Blog",
        path: "content/blog",
        format: "json",
        ui: {
          filename: {
            slugify: (values) => {
              return `${values?.slug || values?.title?.toLowerCase().replace(/ /g, '-')}`
            },
          },
        },
        fields: [
          {
            type: "string",
            name: "title",
            label: "Titre",
            isTitle: true,
            required: true,
          },
          {
            type: "string",
            name: "slug",
            label: "URL (slug)",
            required: true,
          },
          {
            type: "datetime",
            name: "date",
            label: "Date de publication",
            required: true,
          },
          {
            type: "string",
            name: "author",
            label: "Auteur",
            required: true,
          },
          {
            type: "string",
            name: "category",
            label: "Catégorie",
            options: [
              "Automatisation",
              "IA",
              "Marketing",
              "Développement",
              "Business",
            ],
          },
          {
            type: "image",
            name: "image",
            label: "Image de couverture",
          },
          {
            type: "string",
            name: "excerpt",
            label: "Résumé",
            ui: {
              component: "textarea",
            },
          },
          {
            type: "rich-text",
            name: "content",
            label: "Contenu",
            isBody: true,
            templates: [
              {
                name: "BlockQuote",
                label: "Citation",
                fields: [
                  {
                    name: "text",
                    label: "Texte",
                    type: "string",
                    ui: {
                      component: "textarea",
                    },
                  },
                  {
                    name: "author",
                    label: "Auteur",
                    type: "string",
                  },
                ],
              },
              {
                name: "CodeBlock",
                label: "Bloc de code",
                fields: [
                  {
                    name: "language",
                    label: "Langage",
                    type: "string",
                    options: ["javascript", "typescript", "python", "html", "css"],
                  },
                  {
                    name: "code",
                    label: "Code",
                    type: "string",
                    ui: {
                      component: "textarea",
                    },
                  },
                ],
              },
            ],
          },
          {
            type: "string",
            name: "tags",
            label: "Tags",
            list: true,
          },
          {
            type: "boolean",
            name: "published",
            label: "Publié",
            required: true,
          },
          {
            type: "object",
            name: "seo",
            label: "SEO",
            fields: [
              {
                type: "string",
                name: "metaTitle",
                label: "Meta Title",
              },
              {
                type: "string",
                name: "metaDescription",
                label: "Meta Description",
                ui: {
                  component: "textarea",
                },
              },
            ],
          },
        ],
      },
      {
        name: "config",
        label: "Configuration du site",
        path: "content",
        format: "json",
        ui: {
          allowedActions: {
            create: false,
            delete: false,
          },
        },
        match: {
          include: "site-config",
        },
        fields: [
          {
            type: "object",
            name: "site",
            label: "Informations du site",
            fields: [
              {
                type: "string",
                name: "name",
                label: "Nom du site",
              },
              {
                type: "string",
                name: "tagline",
                label: "Slogan",
              },
              {
                type: "string",
                name: "description",
                label: "Description",
                ui: {
                  component: "textarea",
                },
              },
              {
                type: "string",
                name: "url",
                label: "URL du site",
              },
              {
                type: "string",
                name: "email",
                label: "Email",
              },
              {
                type: "string",
                name: "phone",
                label: "Téléphone",
              },
            ],
          },
          {
            type: "object",
            name: "hero",
            label: "Section Hero",
            fields: [
              {
                type: "string",
                name: "title",
                label: "Titre principal",
              },
              {
                type: "string",
                name: "subtitle",
                label: "Sous-titre",
              },
              {
                type: "string",
                name: "description",
                label: "Description",
                ui: {
                  component: "textarea",
                },
              },
              {
                type: "string",
                name: "ctaPrimary",
                label: "Bouton principal",
              },
              {
                type: "string",
                name: "ctaSecondary",
                label: "Bouton secondaire",
              },
            ],
          },
          {
            type: "object",
            name: "social",
            label: "Réseaux sociaux",
            fields: [
              {
                type: "string",
                name: "linkedin",
                label: "LinkedIn",
              },
              {
                type: "string",
                name: "twitter",
                label: "Twitter",
              },
              {
                type: "string",
                name: "facebook",
                label: "Facebook",
              },
              {
                type: "string",
                name: "instagram",
                label: "Instagram",
              },
            ],
          },
        ],
      },
    ],
  },
});

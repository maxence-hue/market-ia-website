import { client } from '@/sanity/lib/client'

// Blog queries
export async function getBlogs() {
  return client.fetch(`
    *[_type == "blog"] | order(publishedAt desc) {
      _id,
      title,
      slug,
      excerpt,
      coverImage,
      category,
      publishedAt,
      author->{
        name,
        role,
        photo
      }
    }
  `)
}

export async function getBlogBySlug(slug: string) {
  return client.fetch(
    `
    *[_type == "blog" && slug.current == $slug][0] {
      _id,
      title,
      slug,
      excerpt,
      coverImage,
      category,
      content,
      publishedAt,
      seo,
      author->{
        name,
        role,
        photo
      }
    }
  `,
    { slug }
  )
}

// Service queries
export async function getServices() {
  return client.fetch(`
    *[_type == "service"] | order(_createdAt desc) {
      _id,
      title,
      slug,
      icon,
      startingPrice,
      priceLabel,
      excerpt,
      image
    }
  `)
}

export async function getServiceBySlug(slug: string) {
  return client.fetch(
    `
    *[_type == "service" && slug.current == $slug][0] {
      _id,
      title,
      slug,
      icon,
      startingPrice,
      priceLabel,
      excerpt,
      image,
      features,
      content
    }
  `,
    { slug }
  )
}

// Subscription queries
export async function getSubscriptions() {
  return client.fetch(`
    *[_type == "subscription"] | order(order asc) {
      _id,
      name,
      slug,
      price,
      activationFee,
      popular,
      order,
      description,
      features,
      timeIncluded,
      sla
    }
  `)
}

// Team queries
export async function getTeam() {
  return client.fetch(`
    *[_type == "team"] | order(order asc) {
      _id,
      name,
      role,
      description,
      photo,
      order,
      linkedin
    }
  `)
}

// Testimonial queries
export async function getTestimonials() {
  return client.fetch(`
    *[_type == "testimonial"] | order(_createdAt desc) {
      _id,
      name,
      company,
      role,
      quote,
      result,
      avatar,
      rating
    }
  `)
}

// Settings queries
export async function getSettings() {
  return client.fetch(`
    *[_type == "settings"][0] {
      siteName,
      tagline,
      description,
      email,
      phone,
      address,
      social,
      heroTitle,
      heroSubtitle
    }
  `)
}

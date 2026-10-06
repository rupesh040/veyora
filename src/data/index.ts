import contentData from './content.json';

const sections = contentData.Veyora.sections;

export const navbar = sections.Header.variants.VeyoraHeader1;
export const hero = sections.Banner.variants.VeyoraBanner1;
export const whyVeyora = sections.WhyChooseUs.variants.VeyoraWhyChooseUs1;
export const coreFeatures = sections.CoreFeatures.variants.VeyoraCoreFeatures1;
export const testimonials = sections.Testimonial.variants.VeyoraTestimonial1;
export const ourTeam = sections.Team.variants.VeyoraTeam1;
export const footer = sections.Footer.variants.VeyoraFooter1;

// Extracted sections
export const blogDetail = sections.BlogDetail.variants.VeyoraBlogDetail1;
export const gallery = sections.Gallery.variants.VeyoraGallery1;
export const insights = sections.Insights.variants.VeyoraInsights1;
export const ourApproach = sections.OurApproach.variants.VeyoraOurApproach1;
export const services = sections.Services.variants.VeyoraServices1;
export const servicesOverview = sections.ServicesOverview.variants.VeyoraServicesOverview1;
export const aboutSection = sections.AboutSection.variants.VeyoraAboutSection1;
export const aboutVeyora = sections.AboutVeyora.variants.VeyoraAboutVeyora1;
export const contactSection = sections.ContactSection.variants.VeyoraContact1;
export const serviceDetail = sections.ServiceDetail.variants.VeyoraServiceDetail1;
export const pageHeroes = sections.PageHeroes.variants;
export const aboutHero = sections.AboutHero.variants.VeyoraAboutHero1;
export const processSection = sections.ProcessSection.variants.VeyoraProcess1;
export const locationSection = sections.LocationSection.variants.VeyoraLocation1;
export const stats = sections.Stats.variants.VeyoraStats1;
export const projectCTA = sections.ProjectCTA.variants.VeyoraProjectCTA1;

const content = {
  navbar,
  hero,
  whyVeyora,
  coreFeatures,
  testimonials,
  ourTeam,
  footer,
  blogDetail,
  gallery,
  insights,
  ourApproach,
  services,
  servicesOverview,
  aboutSection,
  aboutVeyora,
  contactSection,
  serviceDetail,
  pageHeroes,
  aboutHero,
  processSection,
  locationSection,
  stats,
  projectCTA
};

export default content;

interface JobHighlights {
  Qualifications: string[];
  Responsibilities: string[];
  Benefits: null | string[];
}

interface JobRequiredEducation {
  postgraduate_degree: boolean;
  professional_certification: boolean;
  high_school: boolean;
  associates_degree: boolean;
  bachelors_degree: boolean;
  degree_mentioned: boolean;
  degree_preferred: boolean;
  professional_certification_mentioned: boolean;
}

interface JobRequiredExperience {
  no_experience_required: boolean;
  required_experience_in_months: number | null;
  experience_mentioned: boolean;
  experience_preferred: boolean;
}

export default interface Job {
  employer_name: string;
  employer_logo: string;
  employer_website: string;
  employer_company_type: string;
  job_id: string;
  job_employment_type: string;
  job_title: string;
  job_apply_link: string;
  job_is_remote: boolean;
  job_posted_at_timestamp: number;
  job_posted_at_datetime_utc: string;
  job_city: null | string;
  job_state: null | string;
  job_country: null | string;
  job_latitude: number;
  job_longitude: number;
  // job_benefits?: JobBenefits | null;
  job_offer_expiration_datetime_utc: string;
  job_offer_expiration_timestamp: number;
  job_required_experience: JobRequiredExperience;
  job_required_skills: string[] | null;
  job_required_education: JobRequiredEducation;
  job_highlights: JobHighlights;
}

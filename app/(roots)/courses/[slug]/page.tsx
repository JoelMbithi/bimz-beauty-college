import { notFound } from 'next/navigation';
import { courses, getCourseBySlug } from '@/app/features/OurCourses/data/Course';
import AllCourses from '@/app/features/OurCourses/components/CourseDetails';

type PageParams = { slug: string };

export function generateStaticParams() {
  return courses.map((course) => ({ slug: course.slug }));
}

export async function generateMetadata({ params }: { params: Promise<PageParams> }) {
  const { slug } = await params;
  const course = getCourseBySlug(slug);
  if (!course) return {};
  return {
    title: `${course.title} | Bimz Beaty College`,
    description: course.description,
  };
}

export default async function Page({ params }: { params: Promise<PageParams> }) {
  const { slug } = await params;
  const course = getCourseBySlug(slug);
  if (!course) notFound();

  return <AllCourses course={course} />;
}
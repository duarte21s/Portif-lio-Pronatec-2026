import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { SiteFooter } from '@/components/site-footer'
import { SiteHeader } from '@/components/site-header'
import { StudentProfile } from '@/components/student-profile'
import { MotionPage } from '@/components/motion-page'
import { classmates, findStudentBySlug } from '@/data/portfolio'

export function generateStaticParams() {
  return classmates.map(({ slug }) => ({ slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const student = findStudentBySlug(slug)
  return { title: student ? `${student.name} — PRONATEC 2026` : 'Perfil — PRONATEC 2026' }
}

export default async function StudentPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const student = findStudentBySlug(slug)
  if (!student) notFound()
  return <><SiteHeader /><MotionPage><main><StudentProfile student={student} /></main></MotionPage><SiteFooter /></>
}

'use client'
import { SectionHeader, SubHeader } from "@/app/components/ReuseableComponents";
import Image from "next/image";
import { useRouter, useSearchParams } from "next/navigation";

const projectsData = [
  {
    id: '1',
    title: 'Project 1',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum quas maiores, ducimus non dolor illum.',
    images: ['/imgs/2.jpg','/imgs/4.jpg']
  },
  {
    id: '2',
    title: 'Project 2',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum quas maiores, ducimus non dolor illum.',
    images: ['/imgs/1.jpg','/imgs/3.jpg']
  },
  {
    id: '3',
    title: 'Project 3',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum quas maiores, ducimus non dolor illum.',
    images: ['/imgs/5.jpg','/imgs/7.jpg']
  },
  // add more projects as needed
];

export default function Page({ params }) {
    const router = useRouter();

    //Access the url search params
    const searchParams = useSearchParams();

    // extract the projectId from the url
    const search = searchParams.getAll('project')

    // Find the project with the matyching ID
    const project = projectsData.find((p) => String(p.id) === String(search));

    //check if the project is found 
    if (!project) {
        return <div>Project not found!</div>
    }

    const searchId = parseInt(search);

    const handlePrevious = () => {
        if (searchId > 1) {
            router.replace(`/projects/[project]?project=${searchId - 1}`);
        } else if (searchId <= 1) {
            router.replace('/projects')
        }
    }

    const handleNext = () => {
        if (projectsData.find((p) => String(p.id) <= String(search))) {
            router.push(`/projects/[project]?project=${searchId + 1}`);
        } else {
            null
        }
    }

    return (
        <main>
            <SubHeader backgroundImage={project.images[1]} pageTitle={project.title} />

            <nav className="flex items-center w-full justify-between px-4 mt-8">
                <button className="bg-dark-ocean-blue text-white py-2 px-4 rounded-md hover:bg-white hover:text-ocean-blue" onClick={handlePrevious}>Previous</button>
                <button className="bg-ocean-blue text-white py-2 px-4 rounded-md hover:bg-white hover:text-ocean-blue" onClick={handleNext}>Next</button>
            </nav>

            <section className="container px-2 mx-auto my-16">
                <div className="max-w-2xl mx-auto">
                    {/* Project Image (if available) */}
                    {project.images && project.images.length > 0 && (
                        <Image src={project.images[0]} alt={`${project.title} Image`} width={500} height={500} quality={100} priority className="w-full h-60 object-cover mb-6 rounded-md" />
                    )}

                    {/* Project Title */}
                    <SectionHeader headerLink={`#${project.title}`} headerText={project.title} />

                    {/* Project Description */}
                    <p className="text-lg text-gray-700 mb-8">{project.description}</p>

                    {/* Addritional Project Details can be added here */}
                </div>
            </section>
        </main>
    )
}
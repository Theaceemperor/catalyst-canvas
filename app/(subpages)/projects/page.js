import { Project, SectionHeader, SubHeader } from "@/app/components/ReuseableComponents";


export default function Page() {
    const projects = [
      {
        id: '1',
        title: 'Project 1',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum quas maiores, ducimus non dolor illum.',
        imageUrl: '/imgs/4.jpg',
        link: '#project1'
      },
      {
        id: '2',
        title: 'Project 2',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum quas maiores, ducimus non dolor illum.',
        imageUrl: '/imgs/8.jpg',
        link: '#project2'
      },
      {
        id: '3',
        title: 'Project 3',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum quas maiores, ducimus non dolor illum.',
        imageUrl: '/imgs/bg_video.mp4',
        link: '#project3'
      },
      // add more projects as needed
    ];

    const impactData = [
        { id:1, title: 'Impact A', description: 'Description of Impact A' },
        { id:2, title: 'Impact B', description: 'Description of Impact B' },
        { id:3, title: 'Impact C', description: 'Description of Impact C' },
        { id:4, title: 'Impact D', description: 'Description of Impact D' },
        { id:5, title: 'Impact E', description: 'Description of Impact E' },
    ]

    const successStoriesData = [
        { id:1, title: 'Success Story A', description: 'Description of Success Story A' },
        { id:2, title: 'Success Story B', description: 'Description of Success Story B' },
        { id:3, title: 'Success Story C', description: 'Description of Success Story C' },
        { id:4, title: 'Success Story D', description: 'Description of Success Story D' },
        { id:5, title: 'Success Story E', description: 'Description of Success Story E' },
    ]
  

    return (
        <main>
            <SubHeader backgroundImage={'imgs/8.jpg'} pageTitle={'Our Projects'} />
            <section className='py-16 px-2'>
                <div id='projects' className='container mx-auto'>
                    <SectionHeader headerLink={'#projects'} headerText={'Our Projects'} />
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
                        {projects.map((project, index) => (
                        <Project key={index} {...project} link={`/projects/[project]?project=${project.id}`} />
                        ))}
                    </div>
                </div>

            </section>

            {/* Impact Section */}
            <div id="impact" className="container mx-auto px-2 mb-16">
                <SectionHeader headerLink={'#impact'} headerText={'Our Impacts'} />

                {/* Impact Items */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {impactData.map((impactItem) => (
                        // Impact Item JSX (Similar to project card)
                        <Project key={impactItem.id} description={impactItem.description} title={impactItem.title} />
                    ))}
                </div>
            </div>

            {/* Success Stories Section */}
            <div id="success-stories" className="container mx-auto my-16 px-2">
                <SectionHeader headerLink={'#success-stories'} headerText={'Our Success Stories'} />

                {/* Success Stories Items */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {successStoriesData.map((successStoriesItem) => (
                        // Impact Item JSX (Similar to project card)
                        <Project key={successStoriesItem.id} description={successStoriesItem.description} title={successStoriesItem.title} />
                    ))}
                </div>
            </div>
        </main>
    )
}
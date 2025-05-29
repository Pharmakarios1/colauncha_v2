import CustomCard from './CustomCard';

export interface TeamMemberProps {
  teamImg: string;
  name: string;
  position: string;
  description: string;
  socialLinks: {
    linkedin: string;
    twitter: string;
  };
}

interface TeamProps {
  members?: TeamMemberProps[]; // Made optional with '?'
}

const defaultMembers: TeamMemberProps[] = [
  {
    teamImg: '/jpg/Sola.jpg',
    name: 'Sola Akano',
    position: 'CEO & Founder',
    description:
      'Mr. Sola Akano is a visionary leader with over 10 years of experience in the tech & energy industry. He has a passion for innovation and a commitment to excellence.',
    socialLinks: {
      linkedin: 'https://www.linkedin.com/in/akano-oluwasola',
      twitter: 'https://twitter.com/johndoe'
    }
  },
  {
    teamImg: '/jpg/Akintola.jpg',
    name: 'Akintola Oluwaseun',
    position: 'Project Manager',
    description:
      'Mr. Akintola Oluwaseun is a seasoned project manager with a track record of delivering complex projects on time and within budget. His expertise in agile methodologies has been instrumental in driving team success.',
    socialLinks: {
      linkedin: 'https://www.linkedin.com/in/akano-oluwasola',
      twitter: 'https://twitter.com/johndoe'
    }
  },
  {
    teamImg: '/jpg/Iyanu.jpg',
    name: 'Iyanu Ajimobi',
    position: 'Backend Develope/Technical Lead',
    description:
      'Mr. Iyanu Ajimobi is a skilled backend developer with a deep understanding of system architecture and cloud technologies. His leadership in technical projects has been pivotal in achieving our goals.',
    socialLinks: {
      linkedin: 'https://www.linkedin.com/in/akano-oluwasola',
      twitter: 'https://twitter.com/johndoe'
    }
  },
  {
    teamImg: '/jpg/david.jpg',
    name: 'David Adesope',
    position: 'Product Designer',
    description:
      'Mr. David Adesope is a creative product designer with a passion for crafting intuitive user interfaces. His designs have greatly improved the user experience of our products.',
    socialLinks: {
      linkedin: 'https://www.linkedin.com/in/akano-oluwasola',
      twitter: 'https://twitter.com/johndoe'
    }
  },
  {
    teamImg: '/jpg/blessed.jpg',
    name: 'Blessed Akhigbe',
    position: 'Frontend Developer Lead',
    description:
      'Ms. Blessed Akhigbe is a dedicated frontend developer with a keen eye for detail. Her work in creating responsive and accessible web applications has been invaluable to our team.',
    socialLinks: {
      linkedin: 'https://www.linkedin.com/in/akano-oluwasola',
      twitter: 'https://twitter.com/johndoe'
    }
  },
  {
    teamImg: '/jpg/uthman.jpg',
    name: 'Adebari Uthman Titilope',
    position: 'Frontend Developer',
    description:
      'Mr. Adebari Uthman Titilope is a proficient frontend developer with expertise in modern web technologies. His contributions have been crucial in building responsive and user-friendly applications.',
    socialLinks: {
      linkedin: 'https://www.linkedin.com/in/akano-oluwasola',
      twitter: 'https://twitter.com/johndoe'
    }
  },
  {
    teamImg: '/jpg/ify.jpg',
    name: 'Ifunanya Ugwoke',
    position: 'Frontend Developer',
    description:
      'Ms. Ifunanya Ugwoke is a talented frontend developer known for her attention to detail and commitment to delivering high-quality code. Her work has significantly enhanced the performance of our web applications.',
    socialLinks: {
      linkedin: 'https://www.linkedin.com/in/akano-oluwasola',
      twitter: 'https://twitter.com/johndoe'
    }
  }
];

const Team: React.FC<TeamProps> = ({ members = defaultMembers }) => {
  return (
    <div>
      <div className=" w-full md:w-[95%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 place-items-center my-10">
        {members.map((member, index) => (
          <CustomCard
            key={index}
            teamImg={member.teamImg}
            name={member.name}
            position={member.position}
            description={member.description}
            socialLinks={member.socialLinks}
          />
        ))}
      </div>
    </div>
  );
};

export default Team;

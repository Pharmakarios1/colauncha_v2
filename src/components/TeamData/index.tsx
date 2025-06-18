import CustomCard from './CustomCard';

export interface TeamMemberProps {
  teamImg: string;
  name: string;
  className?: string; // Made optional with '?'
  position: string;
  description: string;
  socialLinks: {
    linkedin: string;
    twitter: string;
  };
  imageSize?: string; // Optional prop for image size
}

interface TeamProps {
  members?: TeamMemberProps[]; // Made optional with '?'
}

const defaultMembers: TeamMemberProps[] = [
  {
    teamImg: '/png/Akintola2.png',
    name: 'Akintola Oluwaseun',
    position: 'Product Manager',
    className: 'bg-[#3783FF52]',
    description:
      'Mr. Akintola Oluwaseun is a seasoned project manager with a track record of delivering complex projects on time and within budget. His expertise in agile methodologies has been instrumental in driving team success.',
    socialLinks: {
      linkedin: 'https://www.linkedin.com/in/oluwaseunakintola',
      twitter: 'https://x.com/Theoseun'
    }
  },
  {
    teamImg: '/png/david2.png',
    name: 'David Adesope',
    position: 'Product Designer',
    className: 'bg-[#4DE94C52]',
    description:
      'Mr. David Adesope is a creative product designer with a passion for crafting intuitive user interfaces. His designs have greatly improved the user experience of our products.',
    socialLinks: {
      linkedin: 'https://www.linkedin.com/in/david-adesope-237210223',
      twitter: 'https://x.com/'
    }
  },
  {
    teamImg: '/png/Iyanu2.png',
    name: 'Iyanu Ajimobi',
    position: 'Backend Developer/Technical Lead',
    className: 'bg-[#F6000052]',
    description:
      'Mr. Iyanu Ajimobi is a skilled backend developer with a deep understanding of system architecture and cloud technologies. His leadership in technical projects has been pivotal in achieving our goals.',
    socialLinks: {
      linkedin: 'https://www.linkedin.com/in/i-yan-u',
      twitter: 'https://x.com/__yandev__'
    }
  },
  {
    teamImg: '/png/israel.png',
    name: 'Israel Evwerhamre',
    position: 'Backend Developer',
    className: 'bg-[#F4909052]',
    description:
      'Mr Isreal Evwerhamre is a detail-oriented Back-end developer, proficient in Javasript, HTML, CSS, and Node.Js, with a passion for creating high performance web applications.',
    socialLinks: {
      linkedin: 'http://linkedin.com/in/israel-evwerhamre',
      twitter: 'https://x.com/ogkpos'
    },
    imageSize: '!object-cover'
  },
  {
    teamImg: '/png/uthman2.png',
    name: 'Adebari Uthman Titilope',
    position: 'Frontend Developer',
    className: 'bg-[#FFEE0052]',
    description:
      'Mr. Adebari Uthman Titilope is a proficient frontend developer with expertise in modern web technologies. His contributions have been crucial in building responsive and user-friendly applications.',
    socialLinks: {
      linkedin: 'https://www.linkedin.com/in/adebari-uthman-titilope-377961260',
      twitter: 'https://x.com/'
    }
  },
  {
    teamImg: '/png/ify2.png',
    name: 'Ifunanya Ugwoke',
    position: 'Frontend Developer',
    className: 'bg-[#FF8C0052]',
    description:
      'Miss. Ifunanya Ugwoke is a talented frontend developer known for her attention to detail and commitment to delivering high-quality code. Her work has significantly enhanced the performance of our web applications.',
    socialLinks: {
      linkedin: 'https://www.linkedin.com/in/ifunanya-chidimma-2702911b1',
      twitter: 'https://x.com/Ifunayach35394'
    }
  },
  {
    teamImg: '/png/isabella.png',
    name: 'Isabella Chiamaka',
    position: 'Digital Marketer',
    className: 'bg-[#FF8C0052]',
    description:
      'Miss Isabella Ngonadi has an experience in administrative support, customer support, career strategy and digital marketing skill to help grow businesses. ',
    socialLinks: {
      linkedin: 'https://www.linkedin.com/in/isabellangonadi',
      twitter: 'https://x.com/spicyy_amaka1'
    }
  },
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
            className={member.className}
            description={member.description}
            socialLinks={member.socialLinks}
            imageSize={member.imageSize || ""}
          />
        ))}
      </div>
    </div>
  );
};

export default Team;

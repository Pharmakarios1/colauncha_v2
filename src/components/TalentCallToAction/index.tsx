import PageWrapper from '@components/PageWrapper';
import JoinAsATalent from './_partials/JoinAsATalent';
import TechStacks from './_partials/TechStacks';

const TalentCallToAction = () => {
  return (
    <div>
      <div className="flex flex-col items-center justify-center w-full bg-blue-900">
        <PageWrapper className="w-full  md:w-[85%] mx-auto gap-28">
          <JoinAsATalent />
          <TechStacks />
        </PageWrapper>
      </div>
    </div>
  );
};

export default TalentCallToAction;

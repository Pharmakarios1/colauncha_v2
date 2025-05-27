import PageWrapper from '@components/PageWrapper';
import JoinAsATalent from './_partials/JoinAsATalent';
import Dev from './_partials/Dev';

const TalentCallToAction = () => {
  return (
    <div>
      <div className="flex flex-col items-center justify-center w-full bg-[#3783FF1A]">
        <PageWrapper className="w-full  md:w-[85%] mx-auto gap-28">
          <JoinAsATalent />
          <Dev />
        </PageWrapper>
      </div>
    </div>
  );
};

export default TalentCallToAction;

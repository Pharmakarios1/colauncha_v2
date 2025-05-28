import PageWrapper from '@components/PageWrapper';
import JoinAsATalent from './_partials/JoinAsATalent';
import Dev from './_partials/Dev';

const TalentCallToAction = () => {
  return (
    <div>
      <div className="relative flex flex-col items-center justify-center w-full bg-[#3783FF1A]">
        <div className="absolute inset-0 bg-black/25"></div>
        <PageWrapper className="w-full  md:w-[85%] mx-auto gap-28">
          <JoinAsATalent />
          <Dev />
        </PageWrapper>
      </div>
    </div>
  );
};

export default TalentCallToAction;

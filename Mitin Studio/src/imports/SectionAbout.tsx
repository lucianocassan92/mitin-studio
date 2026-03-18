import imgImageProfile from "figma:asset/9a89a36091884fee0c9a7d21444a8fc3b6d69032.png";

function Wrapper({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <div className="flex flex-col font-['Poppins:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#4e4e4e] text-[20px] tracking-[-0.6px] w-full">
        <p className="leading-[28px]">{children}</p>
      </div>
    </div>
  );
}
type ContainerTextProps = {
  text: string;
};

function ContainerText({ text }: ContainerTextProps) {
  return <Wrapper>{text}</Wrapper>;
}
type HeadingText1Props = {
  text: string;
};

function HeadingText1({ text }: HeadingText1Props) {
  return (
    <div className="absolute content-stretch flex flex-col inset-0 items-center">
      <div className="flex flex-col font-['Poppins:SemiBold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#05f] text-[72px] text-center tracking-[-2.88px] whitespace-nowrap">
        <p className="leading-[86.4px]">{text}</p>
      </div>
    </div>
  );
}
type HeadingTextProps = {
  text: string;
};

function HeadingText({ text }: HeadingTextProps) {
  return (
    <div className="content-stretch flex flex-col items-center opacity-0 relative shrink-0">
      <div className="flex flex-col font-['Poppins:SemiBold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[72px] text-black text-center tracking-[-2.88px] whitespace-nowrap">
        <p className="leading-[86.4px]">{text}</p>
      </div>
    </div>
  );
}

export default function SectionAbout() {
  return (
    <div className="bg-white content-stretch flex flex-col items-center py-[80px] relative size-full" data-name="Section - About">
      <div className="h-[1107.16px] max-w-[1440px] relative shrink-0 w-full" data-name="Container">
        <div className="flex flex-row items-end justify-end max-w-[inherit] overflow-clip rounded-[inherit] size-full">
          <div className="content-stretch flex items-end justify-end max-w-[inherit] px-[30px] relative size-full">
            <div className="content-stretch flex flex-col gap-[80px] items-start relative shrink-0 w-[828px]" data-name="Content">
              <div className="content-stretch flex flex-col items-start justify-center relative shrink-0 w-full" data-name="Text">
                <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 3">
                  <div className="flex flex-col font-['Poppins:SemiBold',sans-serif] justify-center leading-[57.6px] not-italic relative shrink-0 text-[48px] text-black tracking-[-2.4px] w-full whitespace-pre-wrap">
                    <p className="mb-0">{`       I help creative professionals, `}</p>
                    <p className="mb-0">{`freelancers, and growing brands `}</p>
                    <p className="mb-0">{`bring their digital vision to life — from `}</p>
                    <p className="mb-0">{`designing clean, scalable interfaces `}</p>
                    <p className="mb-0">in figma to building responsive, no-</p>
                    <p className="mb-0">{`code websites in framer. My work `}</p>
                    <p className="mb-0">{`blends clarity, performance, and `}</p>
                    <p className="mb-0">{`storytelling to deliver digital `}</p>
                    <p>experiences that truly connect.</p>
                  </div>
                </div>
              </div>
              <div className="content-stretch flex gap-[16px] items-center relative shrink-0 w-full" data-name="Desktop">
                <div className="overflow-clip relative rounded-[99px] shrink-0 size-[88px]" data-name="Avatar">
                  <div className="absolute inset-0 rounded-[99px]" data-name="image profile">
                    <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[99px]">
                      <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgImageProfile} />
                    </div>
                  </div>
                </div>
                <div className="h-[62px] overflow-clip relative shrink-0 w-[724px]" data-name="Heading">
                  <div className="absolute content-stretch flex flex-col items-start justify-center left-0 top-[-1px] w-[147px]" data-name="Container">
                    <div className="content-stretch flex flex-col items-start pb-[0.8px] relative shrink-0 w-full" data-name="Heading 5">
                      <div className="flex flex-col font-['Poppins:SemiBold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[24px] text-black tracking-[-0.72px] whitespace-nowrap">
                        <p className="leading-[28.8px]">Martha Rae®</p>
                      </div>
                    </div>
                  </div>
                  <div className="absolute content-stretch flex flex-col items-start justify-center left-0 right-0 top-[36.8px]" data-name="Container">
                    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
                      <div className="flex flex-col font-['Poppins:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#4e4e4e] text-[18px] tracking-[-0.54px] w-full">
                        <p className="leading-[25.2px]">{`Crafting websites & digital products`}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="h-[340.81px] overflow-clip relative shrink-0 w-full" data-name="List">
                <div className="absolute content-stretch flex flex-col inset-[0_434px_190.4px_0] items-start" data-name="Container">
                  <div className="content-stretch flex flex-col gap-[8px] items-start justify-center relative shrink-0 w-full" data-name="Desktop">
                    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
                      <HeadingText text="10+" />
                      <HeadingText1 text="10+" />
                    </div>
                    <div className="content-stretch flex flex-col items-start justify-center relative shrink-0 w-[236.39px]" data-name="Container">
                      <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
                        <div className="flex flex-col font-['Poppins:Medium',sans-serif] justify-center leading-[28px] not-italic relative shrink-0 text-[#4e4e4e] text-[20px] tracking-[-0.6px] w-full">
                          <p className="mb-0">Years industry</p>
                          <p>experience</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="absolute content-stretch flex flex-col gap-[8px] items-start justify-center left-[434px] right-0 top-0" data-name="Desktop">
                  <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
                    <HeadingText text="500+" />
                    <HeadingText1 text="500+" />
                  </div>
                  <div className="content-stretch flex flex-col items-start justify-center relative shrink-0 w-[236.39px]" data-name="Container">
                    <ContainerText text="Projects completed" />
                  </div>
                </div>
                <div className="absolute content-stretch flex flex-col gap-[8px] items-start justify-center left-0 right-[434px] top-[190.41px]" data-name="Desktop">
                  <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
                    <HeadingText text="98%" />
                    <HeadingText1 text="98%" />
                  </div>
                  <div className="content-stretch flex flex-col items-start justify-center relative shrink-0 w-[236.39px]" data-name="Container">
                    <ContainerText text="Client satisfaction rate" />
                  </div>
                </div>
                <div className="absolute content-stretch flex flex-col gap-[8px] items-start justify-center left-[434px] right-0 top-[190.41px]" data-name="Desktop">
                  <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
                    <HeadingText text="24/7" />
                    <HeadingText1 text="24/7" />
                  </div>
                  <div className="content-stretch flex flex-col items-start justify-center relative shrink-0 w-[236.39px]" data-name="Container">
                    <Wrapper>{`Support & maintenance`}</Wrapper>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
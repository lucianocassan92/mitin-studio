import clsx from "clsx";
import svgPaths from "./svg-2c1por074d";
import img51Sd1CXkPIk1HFshQfpZ6BmR1GPng from "figma:asset/1114dde7789e544ea0f544287dfdd705085a1fd1.png";
import imgSD4PdSOcgKVahKlNjxsRbmmcPng from "figma:asset/499b0146f67ef3ee17a4247f5442bf61e9e6a8f0.png";
import imgLtXwuk19JVnnHfpUffPnZq3IyPng from "figma:asset/15d798e2a78a071cc05e6420723e8e4a9d8bf520.png";
import imgS9JdBus4XRoXhTbActbjHz9FcwPng from "figma:asset/83c957484fa06e3fe869b3166671782377aded94.png";
import imgI24AvTbn6G8JXz1RywBkMka9BaIPng from "figma:asset/2ec1f962f3bc715452965d175bdd4d1f20041c0d.png";
import imgJ1T7WaWiikFt0FZxS5YIhWvv5QPng from "figma:asset/2921b5371df9f0ab25fc4b93626619aba458ea77.png";
import imgOmcokd4NmXxKgAs4Ma23BHgUPng from "figma:asset/666084cc073bb672cdf5d179bc5c9a513210cb3f.png";
import img9KmJ6R8LH8HtkTuazjo7TFmOeWaPng from "figma:asset/199a9900859e65900bd3e6e116e56c18bacd4d39.png";
import imgIgLSwWb5YYpOr73SkXcfi9OiStgPng from "figma:asset/e55f8bbff050c7c57e799697497dab53c2ffd8e4.png";
import { imgSection } from "./svg-gew9w";
type SectionProps = {
  additionalClassNames?: string;
};

function Section({ children, additionalClassNames = "" }: React.PropsWithChildren<SectionProps>) {
  return (
    <div style={{ maskImage: `url('${imgSection}')` }} className={clsx("absolute mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0%_0%] mask-size-[100%_100%]", additionalClassNames)}>
      <div className="flex flex-row items-center justify-center size-full">{children}</div>
    </div>
  );
}

function Default({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="bg-[#fafafa] relative rounded-[8px] shrink-0 w-full">
      <div className="content-stretch flex flex-col gap-[24px] items-start px-[24px] py-[48px] relative w-full">{children}</div>
    </div>
  );
}

function Body({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <div className="flex flex-col font-['Poppins:Medium',sans-serif] justify-center leading-[21px] not-italic relative shrink-0 text-[#4e4e4e] text-[15px] tracking-[-0.3px] w-full whitespace-pre-wrap">{children}</div>
    </div>
  );
}

function Wrapper({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="absolute inset-0 rounded-[999px]">
      <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[999px]">{children}</div>
    </div>
  );
}

function Omcokd4NmXxKgAs4Ma23BHgUPngImage() {
  return (
    <Wrapper>
      <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgOmcokd4NmXxKgAs4Ma23BHgUPng} />
    </Wrapper>
  );
}

function HeadingAndSupportingText1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <div className="h-[25.21px] shrink-0 w-full" data-name="Sarah Johnson" />
      <div className="h-[21px] shrink-0 w-full" data-name="Home Owner" />
    </div>
  );
}

function HeadingAndSupportingText() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <div className="h-[25.2px] shrink-0 w-full" data-name="Sarah Johnson" />
      <div className="h-[21px] shrink-0 w-full" data-name="Home Owner" />
    </div>
  );
}

function Image() {
  return (
    <div className="relative shrink-0 size-[14px]">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g clipPath="url(#clip0_1_43)" id="image">
          <path d={svgPaths.p412ce00} fill="var(--fill-0, #FACC15)" id="Vector" />
        </g>
        <defs>
          <clipPath id="clip0_1_43">
            <rect fill="white" height="14" width="14" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}
type TextProps = {
  text: string;
  additionalClassNames?: string;
};

function Text({ text, additionalClassNames = "" }: TextProps) {
  return (
    <div className={clsx("content-stretch flex flex-col items-start relative shrink-0 w-full", additionalClassNames)}>
      <div className="flex flex-col font-['Poppins:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#4e4e4e] text-[15px] tracking-[-0.3px] w-full">
        <p className="leading-[21px]">{text}</p>
      </div>
    </div>
  );
}
type SarahJohnsonTextProps = {
  text: string;
};

function SarahJohnsonText({ text }: SarahJohnsonTextProps) {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <div className="flex flex-col font-['Poppins:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[18px] text-black tracking-[-0.54px] w-full">
        <p className="leading-[25.2px]">{text}</p>
      </div>
    </div>
  );
}

function Helper51Sd1CXkPIk1HFshQfpZ6BmR1GPngImage() {
  return (
    <Wrapper>
      <img alt="" className="absolute left-0 max-w-none size-full top-0" src={img51Sd1CXkPIk1HFshQfpZ6BmR1GPng} />
    </Wrapper>
  );
}

export default function SectionTestimonials() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center py-[80px] relative size-full" data-name="Section - Testimonials">
      <div className="max-w-[1500px] relative shrink-0 w-full" data-name="Container">
        <div className="flex flex-col items-center justify-center max-w-[inherit] overflow-clip rounded-[inherit] size-full">
          <div className="content-stretch flex flex-col gap-[48px] items-center justify-center max-w-[inherit] px-[30px] relative w-full">
            <div className="h-[76.8px] overflow-clip relative shrink-0 w-full" data-name="Header → Title → Heading 2">
              <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Poppins:SemiBold',sans-serif] h-[77px] justify-center leading-[0] left-[calc(50%+1.72px)] not-italic text-[64px] text-black text-center top-[37.5px] tracking-[-3.2px] w-[491.374px]">
                <p className="leading-[76.8px]">What clients say</p>
              </div>
            </div>
            <div className="content-stretch flex gap-[16px] h-[920px] items-center justify-center overflow-clip relative shrink-0 w-full" data-name="Desktop">
              <div className="content-stretch flex flex-col h-full items-start justify-center relative shrink-0 w-[449.33px]" data-name="Container">
                <div className="flex-[1_0_0] min-h-px min-w-px relative w-full" data-name="Section:mask-group">
                  <Section additionalClassNames="inset-0">
                    <div className="content-stretch flex h-full items-center justify-center pt-[2680.1px] relative">
                      <div className="content-stretch flex flex-col gap-[15.7px] h-[3728.1px] items-center justify-center relative shrink-0 w-[449.33px]" data-name="List">
                        <div className="content-stretch flex flex-col h-[296.2px] items-start justify-center relative shrink-0 w-full" data-name="Item">
                          <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative w-full" data-name="1">
                            <Default>
                              <div className="content-stretch flex flex-col gap-[12px] items-start justify-center relative shrink-0 w-full" data-name="Profile">
                                <div className="relative rounded-[999px] shrink-0 size-[48px]" data-name="Image">
                                  <Helper51Sd1CXkPIk1HFshQfpZ6BmR1GPngImage />
                                </div>
                                <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading and supporting text">
                                  <SarahJohnsonText text="Emily Carter" />
                                  <Text text="Startup Founder" />
                                </div>
                                <div className="content-stretch flex gap-px items-start relative shrink-0" data-name="Rating">
                                  <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Star Icom">
                                    <div className="absolute content-stretch flex flex-col items-start left-px size-[14px] top-px" data-name="Vector">
                                      <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 size-[14px]" data-name="image fill">
                                        <Image />
                                      </div>
                                    </div>
                                  </div>
                                  <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Star Icom">
                                    <div className="absolute content-stretch flex flex-col items-start left-px size-[14px] top-px" data-name="Vector">
                                      <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 size-[14px]" data-name="image fill">
                                        <Image />
                                      </div>
                                    </div>
                                  </div>
                                  <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Star Icom">
                                    <div className="absolute content-stretch flex flex-col items-start left-px size-[14px] top-px" data-name="Vector">
                                      <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 size-[14px]" data-name="image fill">
                                        <Image />
                                      </div>
                                    </div>
                                  </div>
                                  <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Star Icom">
                                    <div className="absolute content-stretch flex flex-col items-start left-px size-[14px] top-px" data-name="Vector">
                                      <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 size-[14px]" data-name="image fill">
                                        <Image />
                                      </div>
                                    </div>
                                  </div>
                                  <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Star Icom">
                                    <div className="absolute content-stretch flex flex-col items-start left-px size-[14px] top-px" data-name="Vector">
                                      <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 size-[14px]" data-name="image fill">
                                        <Image />
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <Body>
                                <p className="mb-0">{`Felt seamless from start to finish. They understood our `}</p>
                                <p>brand instantly and delivered beyond expectations.</p>
                              </Body>
                            </Default>
                          </div>
                        </div>
                        <div className="content-stretch flex flex-col h-[296.2px] items-start justify-center relative shrink-0 w-full" data-name="Item">
                          <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative w-full" data-name="2">
                            <Default>
                              <div className="content-stretch flex flex-col gap-[12px] items-start justify-center relative shrink-0 w-full" data-name="Profile">
                                <div className="relative rounded-[999px] shrink-0 size-[48px]" data-name="Image">
                                  <Wrapper>
                                    <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgSD4PdSOcgKVahKlNjxsRbmmcPng} />
                                  </Wrapper>
                                </div>
                                <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading and supporting text">
                                  <SarahJohnsonText text="Daniel Lee" />
                                  <Text text="Marketing Director" />
                                </div>
                                <div className="content-stretch flex gap-px items-start relative shrink-0" data-name="Rating">
                                  <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Star Icom">
                                    <div className="absolute content-stretch flex flex-col items-start left-px size-[14px] top-px" data-name="Vector">
                                      <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 size-[14px]" data-name="image fill">
                                        <Image />
                                      </div>
                                    </div>
                                  </div>
                                  <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Star Icom">
                                    <div className="absolute content-stretch flex flex-col items-start left-px size-[14px] top-px" data-name="Vector">
                                      <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 size-[14px]" data-name="image fill">
                                        <Image />
                                      </div>
                                    </div>
                                  </div>
                                  <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Star Icom">
                                    <div className="absolute content-stretch flex flex-col items-start left-px size-[14px] top-px" data-name="Vector">
                                      <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 size-[14px]" data-name="image fill">
                                        <Image />
                                      </div>
                                    </div>
                                  </div>
                                  <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Star Icom">
                                    <div className="absolute content-stretch flex flex-col items-start left-px size-[14px] top-px" data-name="Vector">
                                      <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 size-[14px]" data-name="image fill">
                                        <Image />
                                      </div>
                                    </div>
                                  </div>
                                  <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Star Icom">
                                    <div className="absolute content-stretch flex flex-col items-start left-px size-[14px] top-px" data-name="Vector">
                                      <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 size-[14px]" data-name="image fill">
                                        <Image />
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <Body>
                                <p className="mb-0">{`A rare blend of creative talent and technical precision. I `}</p>
                                <p>would definitely recommend their services.</p>
                              </Body>
                            </Default>
                          </div>
                        </div>
                        <div className="content-stretch flex flex-col h-[296.2px] items-start relative shrink-0 w-full" data-name="Item → 3">
                          <Default>
                            <div className="content-stretch flex flex-col gap-[12px] items-start justify-center relative shrink-0 w-full" data-name="Profile">
                              <div className="relative rounded-[999px] shrink-0 size-[48px]" data-name="Image">
                                <Wrapper>
                                  <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgLtXwuk19JVnnHfpUffPnZq3IyPng} />
                                </Wrapper>
                              </div>
                              <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading and supporting text">
                                <SarahJohnsonText text="Jasmine Torres" />
                                <Text text="Creative Producer" />
                              </div>
                              <div className="content-stretch flex gap-px items-start relative shrink-0" data-name="Rating">
                                <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Star Icom">
                                  <div className="absolute content-stretch flex flex-col items-start left-px size-[14px] top-px" data-name="Vector">
                                    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 size-[14px]" data-name="image fill">
                                      <Image />
                                    </div>
                                  </div>
                                </div>
                                <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Star Icom">
                                  <div className="absolute content-stretch flex flex-col items-start left-px size-[14px] top-px" data-name="Vector">
                                    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 size-[14px]" data-name="image fill">
                                      <Image />
                                    </div>
                                  </div>
                                </div>
                                <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Star Icom">
                                  <div className="absolute content-stretch flex flex-col items-start left-px size-[14px] top-px" data-name="Vector">
                                    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 size-[14px]" data-name="image fill">
                                      <Image />
                                    </div>
                                  </div>
                                </div>
                                <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Star Icom">
                                  <div className="absolute content-stretch flex flex-col items-start left-px size-[14px] top-px" data-name="Vector">
                                    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 size-[14px]" data-name="image fill">
                                      <Image />
                                    </div>
                                  </div>
                                </div>
                                <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Star Icom">
                                  <div className="absolute content-stretch flex flex-col items-start left-px size-[14px] top-px" data-name="Vector">
                                    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 size-[14px]" data-name="image fill">
                                      <Image />
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <Body>
                              <p className="mb-0">{`They were responsive, thoughtful, and brought a lot of `}</p>
                              <p>clarity to our website project. I love the final result!</p>
                            </Body>
                          </Default>
                        </div>
                        <div className="content-stretch flex flex-col h-[296.2px] items-start justify-center relative shrink-0 w-full" data-name="Item">
                          <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative w-full" data-name="1">
                            <Default>
                              <div className="content-stretch flex flex-col gap-[12px] items-start justify-center relative shrink-0 w-full" data-name="Profile">
                                <div className="relative rounded-[999px] shrink-0 size-[48px]" data-name="Image">
                                  <Helper51Sd1CXkPIk1HFshQfpZ6BmR1GPngImage />
                                </div>
                                <HeadingAndSupportingText />
                                <div className="content-stretch flex gap-px items-start relative shrink-0" data-name="Rating">
                                  <div className="shrink-0 size-[16px]" data-name="Star Icom" />
                                  <div className="shrink-0 size-[16px]" data-name="Star Icom" />
                                  <div className="shrink-0 size-[16px]" data-name="Star Icom" />
                                  <div className="shrink-0 size-[16px]" data-name="Star Icom" />
                                  <div className="shrink-0 size-[16px]" data-name="Star Icom" />
                                </div>
                              </div>
                              <div className="h-[42px] shrink-0 w-full" data-name="Body" />
                            </Default>
                          </div>
                        </div>
                        <div className="content-stretch flex flex-col h-[296.2px] items-start justify-center relative shrink-0 w-full" data-name="Item">
                          <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative w-full" data-name="2">
                            <Default>
                              <div className="content-stretch flex flex-col gap-[12px] items-start justify-center relative shrink-0 w-full" data-name="Profile">
                                <div className="rounded-[999px] shrink-0 size-[48px]" data-name="Image" />
                                <HeadingAndSupportingText />
                                <div className="content-stretch flex gap-px items-start relative shrink-0" data-name="Rating">
                                  <div className="shrink-0 size-[16px]" data-name="Star Icom" />
                                  <div className="shrink-0 size-[16px]" data-name="Star Icom" />
                                  <div className="shrink-0 size-[16px]" data-name="Star Icom" />
                                  <div className="shrink-0 size-[16px]" data-name="Star Icom" />
                                  <div className="shrink-0 size-[16px]" data-name="Star Icom" />
                                </div>
                              </div>
                              <div className="h-[42px] shrink-0 w-full" data-name="Body" />
                            </Default>
                          </div>
                        </div>
                        <div className="content-stretch flex flex-col h-[296.2px] items-start relative shrink-0 w-full" data-name="Item → 3">
                          <Default>
                            <div className="content-stretch flex flex-col gap-[12px] items-start justify-center relative shrink-0 w-full" data-name="Profile">
                              <div className="rounded-[999px] shrink-0 size-[48px]" data-name="Image" />
                              <HeadingAndSupportingText />
                              <div className="content-stretch flex gap-px items-start relative shrink-0" data-name="Rating">
                                <div className="shrink-0 size-[16px]" data-name="Star Icom" />
                                <div className="shrink-0 size-[16px]" data-name="Star Icom" />
                                <div className="shrink-0 size-[16px]" data-name="Star Icom" />
                                <div className="shrink-0 size-[16px]" data-name="Star Icom" />
                                <div className="shrink-0 size-[16px]" data-name="Star Icom" />
                              </div>
                            </div>
                            <div className="h-[42px] shrink-0 w-full" data-name="Body" />
                          </Default>
                        </div>
                        <div className="content-stretch flex flex-col h-[296.21px] items-start justify-center relative shrink-0 w-full" data-name="Item">
                          <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative w-full" data-name="1">
                            <Default>
                              <div className="content-stretch flex flex-col gap-[12px] items-start justify-center relative shrink-0 w-full" data-name="Profile">
                                <div className="rounded-[999px] shrink-0 size-[48px]" data-name="Image" />
                                <HeadingAndSupportingText />
                                <div className="content-stretch flex gap-px items-start relative shrink-0" data-name="Rating">
                                  <div className="shrink-0 size-[16px]" data-name="Star Icom" />
                                  <div className="shrink-0 size-[16px]" data-name="Star Icom" />
                                  <div className="shrink-0 size-[16px]" data-name="Star Icom" />
                                  <div className="shrink-0 size-[16px]" data-name="Star Icom" />
                                  <div className="shrink-0 size-[16px]" data-name="Star Icom" />
                                </div>
                              </div>
                              <div className="h-[42px] shrink-0 w-full" data-name="Body" />
                            </Default>
                          </div>
                        </div>
                        <div className="content-stretch flex flex-col h-[296.21px] items-start relative shrink-0 w-full" data-name="Item → 2">
                          <Default>
                            <div className="content-stretch flex flex-col gap-[12px] items-start justify-center relative shrink-0 w-full" data-name="Profile">
                              <div className="rounded-[999px] shrink-0 size-[48px]" data-name="Image" />
                              <HeadingAndSupportingText1 />
                              <div className="content-stretch flex gap-px items-start relative shrink-0" data-name="Rating">
                                <div className="shrink-0 size-[16px]" data-name="Star Icom" />
                                <div className="shrink-0 size-[16px]" data-name="Star Icom" />
                                <div className="shrink-0 size-[16px]" data-name="Star Icom" />
                                <div className="shrink-0 size-[16px]" data-name="Star Icom" />
                                <div className="shrink-0 size-[16px]" data-name="Star Icom" />
                              </div>
                            </div>
                            <div className="h-[42px] shrink-0 w-full" data-name="Body" />
                          </Default>
                        </div>
                        <div className="content-stretch flex flex-col h-[296.2px] items-start justify-center relative shrink-0 w-full" data-name="Item">
                          <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative w-full" data-name="3">
                            <Default>
                              <div className="content-stretch flex flex-col gap-[12px] items-start justify-center relative shrink-0 w-full" data-name="Profile">
                                <div className="rounded-[999px] shrink-0 size-[48px]" data-name="Image" />
                                <HeadingAndSupportingText1 />
                                <div className="content-stretch flex gap-px items-start relative shrink-0" data-name="Rating">
                                  <div className="shrink-0 size-[16px]" data-name="Star Icom" />
                                  <div className="shrink-0 size-[16px]" data-name="Star Icom" />
                                  <div className="shrink-0 size-[16px]" data-name="Star Icom" />
                                  <div className="shrink-0 size-[16px]" data-name="Star Icom" />
                                  <div className="shrink-0 size-[16px]" data-name="Star Icom" />
                                </div>
                              </div>
                              <div className="h-[42px] shrink-0 w-full" data-name="Body" />
                            </Default>
                          </div>
                        </div>
                        <div className="content-stretch flex flex-col h-[296.2px] items-start relative shrink-0 w-full" data-name="Item → 1">
                          <Default>
                            <div className="content-stretch flex flex-col gap-[12px] items-start justify-center relative shrink-0 w-full" data-name="Profile">
                              <div className="rounded-[999px] shrink-0 size-[48px]" data-name="Image" />
                              <HeadingAndSupportingText />
                              <div className="content-stretch flex gap-px items-start relative shrink-0" data-name="Rating">
                                <div className="shrink-0 size-[16px]" data-name="Star Icom" />
                                <div className="shrink-0 size-[16px]" data-name="Star Icom" />
                                <div className="shrink-0 size-[16px]" data-name="Star Icom" />
                                <div className="shrink-0 size-[16px]" data-name="Star Icom" />
                                <div className="shrink-0 size-[16px]" data-name="Star Icom" />
                              </div>
                            </div>
                            <div className="h-[42px] shrink-0 w-full" data-name="Body" />
                          </Default>
                        </div>
                        <div className="content-stretch flex flex-col h-[296.2px] items-start justify-center relative shrink-0 w-full" data-name="Item">
                          <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative w-full" data-name="2">
                            <Default>
                              <div className="content-stretch flex flex-col gap-[12px] items-start justify-center relative shrink-0 w-full" data-name="Profile">
                                <div className="rounded-[999px] shrink-0 size-[48px]" data-name="Image" />
                                <HeadingAndSupportingText />
                                <div className="content-stretch flex gap-px items-start relative shrink-0" data-name="Rating">
                                  <div className="shrink-0 size-[16px]" data-name="Star Icom" />
                                  <div className="shrink-0 size-[16px]" data-name="Star Icom" />
                                  <div className="shrink-0 size-[16px]" data-name="Star Icom" />
                                  <div className="shrink-0 size-[16px]" data-name="Star Icom" />
                                  <div className="shrink-0 size-[16px]" data-name="Star Icom" />
                                </div>
                              </div>
                              <div className="h-[42px] shrink-0 w-full" data-name="Body" />
                            </Default>
                          </div>
                        </div>
                        <div className="content-stretch flex flex-col h-[296.2px] items-start justify-center relative shrink-0 w-full" data-name="Item">
                          <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative w-full" data-name="3">
                            <Default>
                              <div className="content-stretch flex flex-col gap-[12px] items-start justify-center relative shrink-0 w-full" data-name="Profile">
                                <div className="rounded-[999px] shrink-0 size-[48px]" data-name="Image" />
                                <HeadingAndSupportingText />
                                <div className="content-stretch flex gap-px items-start relative shrink-0" data-name="Rating">
                                  <div className="shrink-0 size-[16px]" data-name="Star Icom" />
                                  <div className="shrink-0 size-[16px]" data-name="Star Icom" />
                                  <div className="shrink-0 size-[16px]" data-name="Star Icom" />
                                  <div className="shrink-0 size-[16px]" data-name="Star Icom" />
                                  <div className="shrink-0 size-[16px]" data-name="Star Icom" />
                                </div>
                              </div>
                              <div className="h-[42px] shrink-0 w-full" data-name="Body" />
                            </Default>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Section>
                </div>
              </div>
              <div className="content-stretch flex flex-col h-full items-start justify-center relative shrink-0 w-[449.33px]" data-name="Container">
                <div className="flex-[1_0_0] min-h-px min-w-px relative w-full" data-name="Section:mask-group">
                  <div className="absolute content-stretch flex inset-0 items-center justify-center mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0%_0%] mask-size-[100%_100%] pb-[797.91px]" data-name="Section" style={{ maskImage: `url('${imgSection}')` }}>
                    <div className="content-stretch flex flex-col gap-[16px] h-[3984.77px] items-center justify-center relative shrink-0 w-[449.33px]" data-name="List">
                      <div className="content-stretch flex flex-col h-[317.2px] items-start relative shrink-0 w-full" data-name="Item → 4">
                        <Default>
                          <div className="content-stretch flex flex-col gap-[12px] items-start justify-center relative shrink-0 w-full" data-name="Profile">
                            <div className="rounded-[999px] shrink-0 size-[48px]" data-name="Image" />
                            <HeadingAndSupportingText />
                            <div className="content-stretch flex gap-px items-start relative shrink-0" data-name="Rating">
                              <div className="shrink-0 size-[16px]" data-name="Star Icom" />
                              <div className="shrink-0 size-[16px]" data-name="Star Icom" />
                              <div className="shrink-0 size-[16px]" data-name="Star Icom" />
                              <div className="shrink-0 size-[16px]" data-name="Star Icom" />
                              <div className="shrink-0 size-[16px]" data-name="Star Icom" />
                            </div>
                          </div>
                          <div className="h-[63px] shrink-0 w-full" data-name="Body" />
                        </Default>
                      </div>
                      <div className="content-stretch flex flex-col h-[317.21px] items-start justify-center relative shrink-0 w-full" data-name="Item">
                        <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative w-full" data-name="5">
                          <Default>
                            <div className="content-stretch flex flex-col gap-[12px] items-start justify-center relative shrink-0 w-full" data-name="Profile">
                              <div className="rounded-[999px] shrink-0 size-[48px]" data-name="Image" />
                              <HeadingAndSupportingText />
                              <div className="content-stretch flex gap-px items-start relative shrink-0" data-name="Rating">
                                <div className="shrink-0 size-[16px]" data-name="Star Icom" />
                                <div className="shrink-0 size-[16px]" data-name="Star Icom" />
                                <div className="shrink-0 size-[16px]" data-name="Star Icom" />
                                <div className="shrink-0 size-[16px]" data-name="Star Icom" />
                                <div className="shrink-0 size-[16px]" data-name="Star Icom" />
                              </div>
                            </div>
                            <div className="h-[63px] shrink-0 w-full" data-name="Body" />
                          </Default>
                        </div>
                      </div>
                      <div className="content-stretch flex flex-col h-[317.2px] items-start relative shrink-0 w-full" data-name="Item → 6">
                        <Default>
                          <div className="content-stretch flex flex-col gap-[12px] items-start justify-center relative shrink-0 w-full" data-name="Profile">
                            <div className="rounded-[999px] shrink-0 size-[48px]" data-name="Image" />
                            <HeadingAndSupportingText />
                            <div className="content-stretch flex gap-px items-start relative shrink-0" data-name="Rating">
                              <div className="shrink-0 size-[16px]" data-name="Star Icom" />
                              <div className="shrink-0 size-[16px]" data-name="Star Icom" />
                              <div className="shrink-0 size-[16px]" data-name="Star Icom" />
                              <div className="shrink-0 size-[16px]" data-name="Star Icom" />
                              <div className="shrink-0 size-[16px]" data-name="Star Icom" />
                            </div>
                          </div>
                          <div className="h-[63px] shrink-0 w-full" data-name="Body" />
                        </Default>
                      </div>
                      <div className="content-stretch flex flex-col h-[317.21px] items-start justify-center relative shrink-0 w-full" data-name="Item">
                        <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative w-full" data-name="4">
                          <Default>
                            <div className="content-stretch flex flex-col gap-[12px] items-start justify-center relative shrink-0 w-full" data-name="Profile">
                              <div className="rounded-[999px] shrink-0 size-[48px]" data-name="Image" />
                              <HeadingAndSupportingText />
                              <div className="content-stretch flex gap-px items-start relative shrink-0" data-name="Rating">
                                <div className="shrink-0 size-[16px]" data-name="Star Icom" />
                                <div className="shrink-0 size-[16px]" data-name="Star Icom" />
                                <div className="shrink-0 size-[16px]" data-name="Star Icom" />
                                <div className="shrink-0 size-[16px]" data-name="Star Icom" />
                                <div className="shrink-0 size-[16px]" data-name="Star Icom" />
                              </div>
                            </div>
                            <div className="h-[63px] shrink-0 w-full" data-name="Body" />
                          </Default>
                        </div>
                      </div>
                      <div className="content-stretch flex flex-col h-[317.2px] items-start justify-center relative shrink-0 w-full" data-name="Item">
                        <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative w-full" data-name="5">
                          <Default>
                            <div className="content-stretch flex flex-col gap-[12px] items-start justify-center relative shrink-0 w-full" data-name="Profile">
                              <div className="rounded-[999px] shrink-0 size-[48px]" data-name="Image" />
                              <HeadingAndSupportingText1 />
                              <div className="content-stretch flex gap-px items-start relative shrink-0" data-name="Rating">
                                <div className="shrink-0 size-[16px]" data-name="Star Icom" />
                                <div className="shrink-0 size-[16px]" data-name="Star Icom" />
                                <div className="shrink-0 size-[16px]" data-name="Star Icom" />
                                <div className="shrink-0 size-[16px]" data-name="Star Icom" />
                                <div className="shrink-0 size-[16px]" data-name="Star Icom" />
                              </div>
                            </div>
                            <div className="h-[63px] shrink-0 w-full" data-name="Body" />
                          </Default>
                        </div>
                      </div>
                      <div className="content-stretch flex flex-col h-[317.2px] items-start relative shrink-0 w-full" data-name="Item → 6">
                        <Default>
                          <div className="content-stretch flex flex-col gap-[12px] items-start justify-center relative shrink-0 w-full" data-name="Profile">
                            <div className="rounded-[999px] shrink-0 size-[48px]" data-name="Image" />
                            <HeadingAndSupportingText />
                            <div className="content-stretch flex gap-px items-start relative shrink-0" data-name="Rating">
                              <div className="shrink-0 size-[16px]" data-name="Star Icom" />
                              <div className="shrink-0 size-[16px]" data-name="Star Icom" />
                              <div className="shrink-0 size-[16px]" data-name="Star Icom" />
                              <div className="shrink-0 size-[16px]" data-name="Star Icom" />
                              <div className="shrink-0 size-[16px]" data-name="Star Icom" />
                            </div>
                          </div>
                          <Text text="campaigns." additionalClassNames="pt-[42px]" />
                        </Default>
                      </div>
                      <div className="content-stretch flex flex-col h-[317.2px] items-start justify-center relative shrink-0 w-full" data-name="Item">
                        <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative w-full" data-name="4">
                          <Default>
                            <div className="content-stretch flex flex-col gap-[12px] items-start justify-center relative shrink-0 w-full" data-name="Profile">
                              <div className="relative rounded-[999px] shrink-0 size-[48px]" data-name="Image">
                                <Wrapper>
                                  <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgS9JdBus4XRoXhTbActbjHz9FcwPng} />
                                </Wrapper>
                              </div>
                              <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading and supporting text">
                                <SarahJohnsonText text="Marcus Bell" />
                                <Text text="eCommerce Owner" />
                              </div>
                              <div className="content-stretch flex gap-px items-start relative shrink-0" data-name="Rating">
                                <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Star Icom">
                                  <div className="absolute content-stretch flex flex-col items-start left-px size-[14px] top-px" data-name="Vector">
                                    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 size-[14px]" data-name="image fill">
                                      <Image />
                                    </div>
                                  </div>
                                </div>
                                <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Star Icom">
                                  <div className="absolute content-stretch flex flex-col items-start left-px size-[14px] top-px" data-name="Vector">
                                    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 size-[14px]" data-name="image fill">
                                      <Image />
                                    </div>
                                  </div>
                                </div>
                                <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Star Icom">
                                  <div className="absolute content-stretch flex flex-col items-start left-px size-[14px] top-px" data-name="Vector">
                                    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 size-[14px]" data-name="image fill">
                                      <Image />
                                    </div>
                                  </div>
                                </div>
                                <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Star Icom">
                                  <div className="absolute content-stretch flex flex-col items-start left-px size-[14px] top-px" data-name="Vector">
                                    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 size-[14px]" data-name="image fill">
                                      <Image />
                                    </div>
                                  </div>
                                </div>
                                <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Star Icom">
                                  <div className="absolute content-stretch flex flex-col items-start left-px size-[14px] top-px" data-name="Vector">
                                    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 size-[14px]" data-name="image fill">
                                      <Image />
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <Body>
                              <p className="mb-0">{`Super professional and detail-oriented. They brought `}</p>
                              <p className="mb-0">{`our online store to life with smooth UX and clean `}</p>
                              <p>design.</p>
                            </Body>
                          </Default>
                        </div>
                      </div>
                      <div className="content-stretch flex flex-col h-[317.2px] items-start relative shrink-0 w-full" data-name="Item → 5">
                        <Default>
                          <div className="content-stretch flex flex-col gap-[12px] items-start justify-center relative shrink-0 w-full" data-name="Profile">
                            <div className="relative rounded-[999px] shrink-0 size-[48px]" data-name="Image">
                              <Wrapper>
                                <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgI24AvTbn6G8JXz1RywBkMka9BaIPng} />
                              </Wrapper>
                            </div>
                            <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading and supporting text">
                              <SarahJohnsonText text="Amina Kim" />
                              <Text text="Product Manager" />
                            </div>
                            <div className="content-stretch flex gap-px items-start relative shrink-0" data-name="Rating">
                              <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Star Icom">
                                <div className="absolute content-stretch flex flex-col items-start left-px size-[14px] top-px" data-name="Vector">
                                  <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 size-[14px]" data-name="image fill">
                                    <Image />
                                  </div>
                                </div>
                              </div>
                              <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Star Icom">
                                <div className="absolute content-stretch flex flex-col items-start left-px size-[14px] top-px" data-name="Vector">
                                  <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 size-[14px]" data-name="image fill">
                                    <Image />
                                  </div>
                                </div>
                              </div>
                              <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Star Icom">
                                <div className="absolute content-stretch flex flex-col items-start left-px size-[14px] top-px" data-name="Vector">
                                  <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 size-[14px]" data-name="image fill">
                                    <Image />
                                  </div>
                                </div>
                              </div>
                              <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Star Icom">
                                <div className="absolute content-stretch flex flex-col items-start left-px size-[14px] top-px" data-name="Vector">
                                  <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 size-[14px]" data-name="image fill">
                                    <Image />
                                  </div>
                                </div>
                              </div>
                              <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Star Icom">
                                <div className="absolute content-stretch flex flex-col items-start left-px size-[14px] top-px" data-name="Vector">
                                  <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 size-[14px]" data-name="image fill">
                                    <Image />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <Body>
                            <p className="mb-0">{`Every interaction felt purposeful. The design process `}</p>
                            <p className="mb-0">{`was collaborative and the final outcome speaks for `}</p>
                            <p>itself.</p>
                          </Body>
                        </Default>
                      </div>
                      <div className="content-stretch flex flex-col h-[317.2px] items-start justify-center relative shrink-0 w-full" data-name="Item">
                        <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative w-full" data-name="6">
                          <div className="bg-[#fafafa] relative rounded-[8px] shrink-0 w-full" data-name="Default">
                            <div className="content-stretch flex flex-col gap-[24.33px] items-start px-[24px] py-[48px] relative w-full">
                              <div className="content-stretch flex flex-col gap-[12px] items-start justify-center relative shrink-0 w-full" data-name="Profile">
                                <div className="relative rounded-[999px] shrink-0 size-[48px]" data-name="Image">
                                  <Wrapper>
                                    <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgJ1T7WaWiikFt0FZxS5YIhWvv5QPng} />
                                  </Wrapper>
                                </div>
                                <div className="content-stretch flex flex-col gap-[0.33px] items-start relative shrink-0 w-full" data-name="Heading and supporting text">
                                  <SarahJohnsonText text="Tomás Álvarez" />
                                  <Text text="Art Director" />
                                </div>
                                <div className="content-stretch flex gap-px items-start relative shrink-0" data-name="Rating">
                                  <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Star Icom">
                                    <div className="absolute content-stretch flex flex-col items-start left-px size-[14px] top-px" data-name="Vector">
                                      <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 size-[14px]" data-name="image fill">
                                        <Image />
                                      </div>
                                    </div>
                                  </div>
                                  <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Star Icom">
                                    <div className="absolute content-stretch flex flex-col items-start left-px size-[14px] top-px" data-name="Vector">
                                      <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 size-[14px]" data-name="image fill">
                                        <Image />
                                      </div>
                                    </div>
                                  </div>
                                  <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Star Icom">
                                    <div className="absolute content-stretch flex flex-col items-start left-px size-[14px] top-px" data-name="Vector">
                                      <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 size-[14px]" data-name="image fill">
                                        <Image />
                                      </div>
                                    </div>
                                  </div>
                                  <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Star Icom">
                                    <div className="absolute content-stretch flex flex-col items-start left-px size-[14px] top-px" data-name="Vector">
                                      <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 size-[14px]" data-name="image fill">
                                        <Image />
                                      </div>
                                    </div>
                                  </div>
                                  <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Star Icom">
                                    <div className="absolute content-stretch flex flex-col items-start left-px size-[14px] top-px" data-name="Vector">
                                      <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 size-[14px]" data-name="image fill">
                                        <Image />
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="h-[63px] shrink-0 w-full" data-name="Body" />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="content-stretch flex flex-col h-[317.87px] items-start pt-[0.67px] relative shrink-0 w-full" data-name="Item → 4">
                        <Default>
                          <div className="content-stretch flex flex-col gap-[12px] items-start justify-center relative shrink-0 w-full" data-name="Profile">
                            <div className="rounded-[999px] shrink-0 size-[48px]" data-name="Image" />
                            <HeadingAndSupportingText />
                            <div className="content-stretch flex gap-px items-start relative shrink-0" data-name="Rating">
                              <div className="shrink-0 size-[16px]" data-name="Star Icom" />
                              <div className="shrink-0 size-[16px]" data-name="Star Icom" />
                              <div className="shrink-0 size-[16px]" data-name="Star Icom" />
                              <div className="shrink-0 size-[16px]" data-name="Star Icom" />
                              <div className="shrink-0 size-[16px]" data-name="Star Icom" />
                            </div>
                          </div>
                          <div className="h-[63px] shrink-0 w-full" data-name="Body" />
                        </Default>
                      </div>
                      <div className="content-stretch flex flex-col h-[317.21px] items-start justify-center relative shrink-0 w-full" data-name="Item">
                        <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative w-full" data-name="5">
                          <Default>
                            <div className="content-stretch flex flex-col gap-[12px] items-start justify-center relative shrink-0 w-full" data-name="Profile">
                              <div className="rounded-[999px] shrink-0 size-[48px]" data-name="Image" />
                              <HeadingAndSupportingText />
                              <div className="content-stretch flex gap-px items-start relative shrink-0" data-name="Rating">
                                <div className="shrink-0 size-[16px]" data-name="Star Icom" />
                                <div className="shrink-0 size-[16px]" data-name="Star Icom" />
                                <div className="shrink-0 size-[16px]" data-name="Star Icom" />
                                <div className="shrink-0 size-[16px]" data-name="Star Icom" />
                                <div className="shrink-0 size-[16px]" data-name="Star Icom" />
                              </div>
                            </div>
                            <div className="h-[63px] shrink-0 w-full" data-name="Body" />
                          </Default>
                        </div>
                      </div>
                      <div className="content-stretch flex flex-col h-[317.2px] items-start relative shrink-0 w-full" data-name="Item → 6">
                        <Default>
                          <div className="content-stretch flex flex-col gap-[12px] items-start justify-center relative shrink-0 w-full" data-name="Profile">
                            <div className="rounded-[999px] shrink-0 size-[48px]" data-name="Image" />
                            <HeadingAndSupportingText />
                            <div className="content-stretch flex gap-px items-start relative shrink-0" data-name="Rating">
                              <div className="shrink-0 size-[16px]" data-name="Star Icom" />
                              <div className="shrink-0 size-[16px]" data-name="Star Icom" />
                              <div className="shrink-0 size-[16px]" data-name="Star Icom" />
                              <div className="shrink-0 size-[16px]" data-name="Star Icom" />
                              <div className="shrink-0 size-[16px]" data-name="Star Icom" />
                            </div>
                          </div>
                          <div className="h-[63px] shrink-0 w-full" data-name="Body" />
                        </Default>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="content-stretch flex flex-col h-full items-start justify-center relative shrink-0 w-[449.33px]" data-name="Container">
                <div className="flex-[1_0_0] min-h-px min-w-px relative w-full" data-name="Section:mask-group">
                  <Section additionalClassNames="inset-[0_0.01px_0_0]">
                    <div className="content-stretch flex h-full items-center justify-center pt-[2670.1px] relative">
                      <div className="content-stretch flex flex-col gap-[15.7px] h-[3728.1px] items-center justify-center relative shrink-0 w-[449.32px]" data-name="List">
                        <div className="content-stretch flex flex-col h-[296.2px] items-start justify-center relative shrink-0 w-full" data-name="Item">
                          <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative w-full" data-name="7">
                            <Default>
                              <div className="content-stretch flex flex-col gap-[12px] items-start justify-center relative shrink-0 w-full" data-name="Profile">
                                <div className="relative rounded-[999px] shrink-0 size-[48px]" data-name="Image">
                                  <Omcokd4NmXxKgAs4Ma23BHgUPngImage />
                                </div>
                                <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading and supporting text">
                                  <SarahJohnsonText text="Rachel Kim" />
                                  <Text text="UX Strategist" />
                                </div>
                                <div className="content-stretch flex gap-px items-start relative shrink-0" data-name="Rating">
                                  <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Star Icom">
                                    <div className="absolute content-stretch flex flex-col items-start left-px size-[14px] top-px" data-name="Vector">
                                      <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 size-[14px]" data-name="image fill">
                                        <Image />
                                      </div>
                                    </div>
                                  </div>
                                  <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Star Icom">
                                    <div className="absolute content-stretch flex flex-col items-start left-px size-[14px] top-px" data-name="Vector">
                                      <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 size-[14px]" data-name="image fill">
                                        <Image />
                                      </div>
                                    </div>
                                  </div>
                                  <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Star Icom">
                                    <div className="absolute content-stretch flex flex-col items-start left-px size-[14px] top-px" data-name="Vector">
                                      <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 size-[14px]" data-name="image fill">
                                        <Image />
                                      </div>
                                    </div>
                                  </div>
                                  <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Star Icom">
                                    <div className="absolute content-stretch flex flex-col items-start left-px size-[14px] top-px" data-name="Vector">
                                      <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 size-[14px]" data-name="image fill">
                                        <Image />
                                      </div>
                                    </div>
                                  </div>
                                  <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Star Icom">
                                    <div className="absolute content-stretch flex flex-col items-start left-px size-[14px] top-px" data-name="Vector">
                                      <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 size-[14px]" data-name="image fill">
                                        <Image />
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <Body>
                                <p className="mb-0">{`Insightful design choices paired with technical finesse. `}</p>
                                <p>Our users noticed the improvement instantly.</p>
                              </Body>
                            </Default>
                          </div>
                        </div>
                        <div className="content-stretch flex flex-col h-[296.2px] items-start justify-center relative shrink-0 w-full" data-name="Item">
                          <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative w-full" data-name="8">
                            <Default>
                              <div className="content-stretch flex flex-col gap-[12px] items-start justify-center relative shrink-0 w-full" data-name="Profile">
                                <div className="relative rounded-[999px] shrink-0 size-[48px]" data-name="Image">
                                  <Wrapper>
                                    <img alt="" className="absolute left-0 max-w-none size-full top-0" src={img9KmJ6R8LH8HtkTuazjo7TFmOeWaPng} />
                                  </Wrapper>
                                </div>
                                <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading and supporting text">
                                  <SarahJohnsonText text="Leo Mendez" />
                                  <Text text="Freelance Photographer" />
                                </div>
                                <div className="content-stretch flex gap-px items-start relative shrink-0" data-name="Rating">
                                  <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Star Icom">
                                    <div className="absolute content-stretch flex flex-col items-start left-px size-[14px] top-px" data-name="Vector">
                                      <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 size-[14px]" data-name="image fill">
                                        <Image />
                                      </div>
                                    </div>
                                  </div>
                                  <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Star Icom">
                                    <div className="absolute content-stretch flex flex-col items-start left-px size-[14px] top-px" data-name="Vector">
                                      <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 size-[14px]" data-name="image fill">
                                        <Image />
                                      </div>
                                    </div>
                                  </div>
                                  <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Star Icom">
                                    <div className="absolute content-stretch flex flex-col items-start left-px size-[14px] top-px" data-name="Vector">
                                      <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 size-[14px]" data-name="image fill">
                                        <Image />
                                      </div>
                                    </div>
                                  </div>
                                  <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Star Icom">
                                    <div className="absolute content-stretch flex flex-col items-start left-px size-[14px] top-px" data-name="Vector">
                                      <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 size-[14px]" data-name="image fill">
                                        <Image />
                                      </div>
                                    </div>
                                  </div>
                                  <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Star Icom">
                                    <div className="absolute content-stretch flex flex-col items-start left-px size-[14px] top-px" data-name="Vector">
                                      <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 size-[14px]" data-name="image fill">
                                        <Image />
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <Body>
                                <p className="mb-0">{`I now have a portfolio that truly reflects my work. `}</p>
                                <p>Simple, elegant, and fast — exactly what I needed.</p>
                              </Body>
                            </Default>
                          </div>
                        </div>
                        <div className="content-stretch flex flex-col h-[296.2px] items-start relative shrink-0 w-full" data-name="Item → 9">
                          <Default>
                            <div className="content-stretch flex flex-col gap-[12px] items-start justify-center relative shrink-0 w-full" data-name="Profile">
                              <div className="relative rounded-[999px] shrink-0 size-[48px]" data-name="Image">
                                <Wrapper>
                                  <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgIgLSwWb5YYpOr73SkXcfi9OiStgPng} />
                                </Wrapper>
                              </div>
                              <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading and supporting text">
                                <SarahJohnsonText text="Herya Wildan" />
                                <Text text="App Founder" />
                              </div>
                              <div className="content-stretch flex gap-px items-start relative shrink-0" data-name="Rating">
                                <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Star Icom">
                                  <div className="absolute content-stretch flex flex-col items-start left-px size-[14px] top-px" data-name="Vector">
                                    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 size-[14px]" data-name="image fill">
                                      <Image />
                                    </div>
                                  </div>
                                </div>
                                <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Star Icom">
                                  <div className="absolute content-stretch flex flex-col items-start left-px size-[14px] top-px" data-name="Vector">
                                    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 size-[14px]" data-name="image fill">
                                      <Image />
                                    </div>
                                  </div>
                                </div>
                                <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Star Icom">
                                  <div className="absolute content-stretch flex flex-col items-start left-px size-[14px] top-px" data-name="Vector">
                                    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 size-[14px]" data-name="image fill">
                                      <Image />
                                    </div>
                                  </div>
                                </div>
                                <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Star Icom">
                                  <div className="absolute content-stretch flex flex-col items-start left-px size-[14px] top-px" data-name="Vector">
                                    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 size-[14px]" data-name="image fill">
                                      <Image />
                                    </div>
                                  </div>
                                </div>
                                <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Star Icom">
                                  <div className="absolute content-stretch flex flex-col items-start left-px size-[14px] top-px" data-name="Vector">
                                    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 size-[14px]" data-name="image fill">
                                      <Image />
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <Body>
                              <p className="mb-0">{`The UX flow is clean and intuitive. It made onboarding `}</p>
                              <p>users feel effortless. Great collaboration from day one.</p>
                            </Body>
                          </Default>
                        </div>
                        <div className="content-stretch flex flex-col h-[296.2px] items-start justify-center relative shrink-0 w-full" data-name="Item">
                          <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative w-full" data-name="7">
                            <Default>
                              <div className="content-stretch flex flex-col gap-[12px] items-start justify-center relative shrink-0 w-full" data-name="Profile">
                                <div className="relative rounded-[999px] shrink-0 size-[48px]" data-name="Image">
                                  <Omcokd4NmXxKgAs4Ma23BHgUPngImage />
                                </div>
                                <HeadingAndSupportingText />
                                <div className="content-stretch flex gap-px items-start relative shrink-0" data-name="Rating">
                                  <div className="shrink-0 size-[16px]" data-name="Star Icom" />
                                  <div className="shrink-0 size-[16px]" data-name="Star Icom" />
                                  <div className="shrink-0 size-[16px]" data-name="Star Icom" />
                                  <div className="shrink-0 size-[16px]" data-name="Star Icom" />
                                  <div className="shrink-0 size-[16px]" data-name="Star Icom" />
                                </div>
                              </div>
                              <div className="h-[42px] shrink-0 w-full" data-name="Body" />
                            </Default>
                          </div>
                        </div>
                        <div className="content-stretch flex flex-col h-[296.2px] items-start relative shrink-0 w-full" data-name="Item → 8">
                          <Default>
                            <div className="content-stretch flex flex-col gap-[12px] items-start justify-center relative shrink-0 w-full" data-name="Profile">
                              <div className="rounded-[999px] shrink-0 size-[48px]" data-name="Image" />
                              <HeadingAndSupportingText />
                              <div className="content-stretch flex gap-px items-start relative shrink-0" data-name="Rating">
                                <div className="shrink-0 size-[16px]" data-name="Star Icom" />
                                <div className="shrink-0 size-[16px]" data-name="Star Icom" />
                                <div className="shrink-0 size-[16px]" data-name="Star Icom" />
                                <div className="shrink-0 size-[16px]" data-name="Star Icom" />
                                <div className="shrink-0 size-[16px]" data-name="Star Icom" />
                              </div>
                            </div>
                            <div className="h-[42px] shrink-0 w-full" data-name="Body" />
                          </Default>
                        </div>
                        <div className="content-stretch flex flex-col h-[296.21px] items-start justify-center relative shrink-0 w-full" data-name="Item">
                          <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative w-full" data-name="9">
                            <Default>
                              <div className="content-stretch flex flex-col gap-[12px] items-start justify-center relative shrink-0 w-full" data-name="Profile">
                                <div className="rounded-[999px] shrink-0 size-[48px]" data-name="Image" />
                                <HeadingAndSupportingText1 />
                                <div className="content-stretch flex gap-px items-start relative shrink-0" data-name="Rating">
                                  <div className="shrink-0 size-[16px]" data-name="Star Icom" />
                                  <div className="shrink-0 size-[16px]" data-name="Star Icom" />
                                  <div className="shrink-0 size-[16px]" data-name="Star Icom" />
                                  <div className="shrink-0 size-[16px]" data-name="Star Icom" />
                                  <div className="shrink-0 size-[16px]" data-name="Star Icom" />
                                </div>
                              </div>
                              <div className="h-[42px] shrink-0 w-full" data-name="Body" />
                            </Default>
                          </div>
                        </div>
                        <div className="content-stretch flex flex-col h-[296.2px] items-start justify-center relative shrink-0 w-full" data-name="Item">
                          <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative w-full" data-name="7">
                            <Default>
                              <div className="content-stretch flex flex-col gap-[12px] items-start justify-center relative shrink-0 w-full" data-name="Profile">
                                <div className="rounded-[999px] shrink-0 size-[48px]" data-name="Image" />
                                <HeadingAndSupportingText1 />
                                <div className="content-stretch flex gap-px items-start relative shrink-0" data-name="Rating">
                                  <div className="shrink-0 size-[16px]" data-name="Star Icom" />
                                  <div className="shrink-0 size-[16px]" data-name="Star Icom" />
                                  <div className="shrink-0 size-[16px]" data-name="Star Icom" />
                                  <div className="shrink-0 size-[16px]" data-name="Star Icom" />
                                  <div className="shrink-0 size-[16px]" data-name="Star Icom" />
                                </div>
                              </div>
                              <div className="h-[41.99px] shrink-0 w-full" data-name="Body" />
                            </Default>
                          </div>
                        </div>
                        <div className="content-stretch flex flex-col h-[296.21px] items-start relative shrink-0 w-full" data-name="Item → 8">
                          <Default>
                            <div className="content-stretch flex flex-col gap-[12px] items-start justify-center relative shrink-0 w-full" data-name="Profile">
                              <div className="rounded-[999px] shrink-0 size-[48px]" data-name="Image" />
                              <HeadingAndSupportingText1 />
                              <div className="content-stretch flex gap-px items-start relative shrink-0" data-name="Rating">
                                <div className="shrink-0 size-[16px]" data-name="Star Icom" />
                                <div className="shrink-0 size-[16px]" data-name="Star Icom" />
                                <div className="shrink-0 size-[16px]" data-name="Star Icom" />
                                <div className="shrink-0 size-[16px]" data-name="Star Icom" />
                                <div className="shrink-0 size-[16px]" data-name="Star Icom" />
                              </div>
                            </div>
                            <div className="h-[42px] shrink-0 w-full" data-name="Body" />
                          </Default>
                        </div>
                        <div className="content-stretch flex flex-col h-[296.2px] items-start justify-center relative shrink-0 w-full" data-name="Item">
                          <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative w-full" data-name="9">
                            <Default>
                              <div className="content-stretch flex flex-col gap-[12px] items-start justify-center relative shrink-0 w-full" data-name="Profile">
                                <div className="rounded-[999px] shrink-0 size-[48px]" data-name="Image" />
                                <HeadingAndSupportingText />
                                <div className="content-stretch flex gap-px items-start relative shrink-0" data-name="Rating">
                                  <div className="shrink-0 size-[16px]" data-name="Star Icom" />
                                  <div className="shrink-0 size-[16px]" data-name="Star Icom" />
                                  <div className="shrink-0 size-[16px]" data-name="Star Icom" />
                                  <div className="shrink-0 size-[16px]" data-name="Star Icom" />
                                  <div className="shrink-0 size-[16px]" data-name="Star Icom" />
                                </div>
                              </div>
                              <div className="h-[42px] shrink-0 w-full" data-name="Body" />
                            </Default>
                          </div>
                        </div>
                        <div className="content-stretch flex flex-col h-[296.2px] items-start relative shrink-0 w-full" data-name="Item → 7">
                          <Default>
                            <div className="content-stretch flex flex-col gap-[12px] items-start justify-center relative shrink-0 w-full" data-name="Profile">
                              <div className="rounded-[999px] shrink-0 size-[48px]" data-name="Image" />
                              <HeadingAndSupportingText />
                              <div className="content-stretch flex gap-px items-start relative shrink-0" data-name="Rating">
                                <div className="shrink-0 size-[16px]" data-name="Star Icom" />
                                <div className="shrink-0 size-[16px]" data-name="Star Icom" />
                                <div className="shrink-0 size-[16px]" data-name="Star Icom" />
                                <div className="shrink-0 size-[16px]" data-name="Star Icom" />
                                <div className="shrink-0 size-[16px]" data-name="Star Icom" />
                              </div>
                            </div>
                            <div className="h-[42px] shrink-0 w-full" data-name="Body" />
                          </Default>
                        </div>
                        <div className="content-stretch flex flex-col h-[296.21px] items-start justify-center relative shrink-0 w-full" data-name="Item">
                          <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative w-full" data-name="8">
                            <Default>
                              <div className="content-stretch flex flex-col gap-[12px] items-start justify-center relative shrink-0 w-full" data-name="Profile">
                                <div className="rounded-[999px] shrink-0 size-[48px]" data-name="Image" />
                                <HeadingAndSupportingText />
                                <div className="content-stretch flex gap-px items-start relative shrink-0" data-name="Rating">
                                  <div className="shrink-0 size-[16px]" data-name="Star Icom" />
                                  <div className="shrink-0 size-[16px]" data-name="Star Icom" />
                                  <div className="shrink-0 size-[16px]" data-name="Star Icom" />
                                  <div className="shrink-0 size-[16px]" data-name="Star Icom" />
                                  <div className="shrink-0 size-[16px]" data-name="Star Icom" />
                                </div>
                              </div>
                              <div className="h-[42px] shrink-0 w-full" data-name="Body" />
                            </Default>
                          </div>
                        </div>
                        <div className="content-stretch flex flex-col h-[296.2px] items-start justify-center relative shrink-0 w-full" data-name="Item">
                          <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative w-full" data-name="9">
                            <Default>
                              <div className="content-stretch flex flex-col gap-[12px] items-start justify-center relative shrink-0 w-full" data-name="Profile">
                                <div className="rounded-[999px] shrink-0 size-[48px]" data-name="Image" />
                                <HeadingAndSupportingText />
                                <div className="content-stretch flex gap-px items-start relative shrink-0" data-name="Rating">
                                  <div className="shrink-0 size-[16px]" data-name="Star Icom" />
                                  <div className="shrink-0 size-[16px]" data-name="Star Icom" />
                                  <div className="shrink-0 size-[16px]" data-name="Star Icom" />
                                  <div className="shrink-0 size-[16px]" data-name="Star Icom" />
                                  <div className="shrink-0 size-[16px]" data-name="Star Icom" />
                                </div>
                              </div>
                              <div className="h-[42px] shrink-0 w-full" data-name="Body" />
                            </Default>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Section>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
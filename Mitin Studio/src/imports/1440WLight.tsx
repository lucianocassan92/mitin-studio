import clsx from "clsx";
import svgPaths from "./svg-xtyystr12s";
import imgMainHero from "figma:asset/e20f3db8365ca2d162b7f1583a82240030dc43d2.png";
import imgImageProfile from "figma:asset/9a89a36091884fee0c9a7d21444a8fc3b6d69032.png";
import imgUmSejRwRpAiAgF19RGdqDfiw1WiJpg from "figma:asset/49f6537f9805a966bd9d86f901224529cf604c9b.png";
import imgXn5L9Bkbqascxmz7FJmTd1TFcJpg from "figma:asset/f96f2b04bae06ee74ac6f6773a96a75f568dd0a8.png";
import imgIvQf9I1TkyViYt8QXaBBgDg40UJpg from "figma:asset/02d3beee89bdb4f79c15a123adf9e1c30190064d.png";
import imgTsopj1Hwjz07Wo2ZoXWj3B1X3KJpg from "figma:asset/2116399b8684d35d16b8ce95b635336a091849f4.png";
import img51Sd1CXkPIk1HFshQfpZ6BmR1GPng from "figma:asset/1114dde7789e544ea0f544287dfdd705085a1fd1.png";
import imgSD4PdSOcgKVahKlNjxsRbmmcPng from "figma:asset/499b0146f67ef3ee17a4247f5442bf61e9e6a8f0.png";
import imgLtXwuk19JVnnHfpUffPnZq3IyPng from "figma:asset/15d798e2a78a071cc05e6420723e8e4a9d8bf520.png";
import imgS9JdBus4XRoXhTbActbjHz9FcwPng from "figma:asset/83c957484fa06e3fe869b3166671782377aded94.png";
import imgI24AvTbn6G8JXz1RywBkMka9BaIPng from "figma:asset/2ec1f962f3bc715452965d175bdd4d1f20041c0d.png";
import imgJ1T7WaWiikFt0FZxS5YIhWvv5QPng from "figma:asset/2921b5371df9f0ab25fc4b93626619aba458ea77.png";
import imgOmcokd4NmXxKgAs4Ma23BHgUPng from "figma:asset/666084cc073bb672cdf5d179bc5c9a513210cb3f.png";
import img9KmJ6R8LH8HtkTuazjo7TFmOeWaPng from "figma:asset/199a9900859e65900bd3e6e116e56c18bacd4d39.png";
import imgIgLSwWb5YYpOr73SkXcfi9OiStgPng from "figma:asset/e55f8bbff050c7c57e799697497dab53c2ffd8e4.png";
import { imgBottom, imgSection, imgOverlay, imgSection1 } from "./svg-sfsqp";
type VectorProps = {
  additionalClassNames?: string;
};

function Vector({ children, additionalClassNames = "" }: React.PropsWithChildren<VectorProps>) {
  return (
    <div className={clsx("absolute", additionalClassNames)}>
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19.5 19.5">
        {children}
      </svg>
    </div>
  );
}

function BackgroundHorizontalBorder({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="bg-white relative shrink-0 w-full">
      <div className="content-stretch flex flex-col items-start overflow-clip pb-[0.995px] relative rounded-[inherit] w-full">{children}</div>
      <div aria-hidden="true" className="absolute border-[#d4d4d4] border-b-[0.995px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}
type SectionProps = {
  additionalClassNames?: string;
};

function Section({ children, additionalClassNames = "" }: React.PropsWithChildren<SectionProps>) {
  return (
    <div style={{ maskImage: `url('${imgSection1}')` }} className={clsx("absolute mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0%_0%] mask-size-[100%_100%]", additionalClassNames)}>
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

function Body1({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <div className="flex flex-col font-['Poppins:Medium',sans-serif] justify-center leading-[21px] not-italic relative shrink-0 text-[#4e4e4e] text-[15px] tracking-[-0.3px] w-full whitespace-pre-wrap">{children}</div>
    </div>
  );
}

function Body({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[32px] right-[32px] top-[220.8px]">
      <div className="flex flex-col font-['Poppins:Medium',sans-serif] justify-center leading-[28px] not-italic relative shrink-0 text-[#4e4e4e] text-[20px] tracking-[-0.6px] whitespace-nowrap whitespace-pre">{children}</div>
    </div>
  );
}

function Wrapper6({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="absolute inset-0 rounded-[12px]">
      <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[12px]">{children}</div>
    </div>
  );
}

function Wrapper5({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="absolute inset-0 rounded-[999px]">
      <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[999px]">{children}</div>
    </div>
  );
}
type Wrapper4Props = {
  additionalClassNames?: string;
};

function Wrapper4({ children, additionalClassNames = "" }: React.PropsWithChildren<Wrapper4Props>) {
  return (
    <div className={clsx("relative shrink-0", additionalClassNames)}>
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        {children}
      </svg>
    </div>
  );
}

function Wrapper3({ children }: React.PropsWithChildren<{}>) {
  return (
    <div style={{ "--transform-inner-width": "1185", "--transform-inner-height": "19" } as React.CSSProperties} className="flex items-center justify-center relative shrink-0 size-[18px]">
      <div className="-rotate-90 flex-none">{children}</div>
    </div>
  );
}

function Wrapper2({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="max-w-[1500px] relative shrink-0 w-full">
      <div className="flex flex-col items-center justify-center max-w-[inherit] overflow-clip rounded-[inherit] size-full">{children}</div>
    </div>
  );
}

function Container1({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="relative shrink-0 w-full">
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between p-[20px] relative w-full">{children}</div>
      </div>
    </div>
  );
}

function Container({ children }: React.PropsWithChildren<{}>) {
  return (
    <Wrapper2>
      <div className="content-stretch flex flex-col gap-[48px] items-center justify-center max-w-[inherit] px-[30px] relative w-full">{children}</div>
    </Wrapper2>
  );
}

function Icon({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="aspect-[28/28] bg-white content-stretch flex flex-col items-center justify-center overflow-clip py-[5px] relative rounded-[99px] shrink-0">
      <Wrapper3>{children}</Wrapper3>
    </div>
  );
}

function Wrapper1({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[32px] pb-[0.8px] right-[32px] top-[151px]">
      <div className="flex flex-col font-['Poppins:SemiBold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[24px] text-black tracking-[-0.72px] whitespace-nowrap">
        <p className="leading-[28.8px]">{children}</p>
      </div>
    </div>
  );
}

function Wrapper({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <div className="flex flex-col font-['Poppins:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#4e4e4e] text-[20px] tracking-[-0.6px] w-full">
        <p className="leading-[28px]">{children}</p>
      </div>
    </div>
  );
}
type ContainerText5Props = {
  text: string;
};

function ContainerText5({ text }: ContainerText5Props) {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <div className="flex flex-col font-['Poppins:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#d4d4d4] text-[15px] tracking-[-0.3px] whitespace-nowrap">
        <p className="leading-[21px]">{text}</p>
      </div>
    </div>
  );
}
type ContainerText4Props = {
  text: string;
};

function ContainerText4({ text }: ContainerText4Props) {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <div className="flex flex-col font-['Poppins:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-white tracking-[-0.48px] whitespace-nowrap">
        <p className="leading-[22.4px]">{text}</p>
      </div>
    </div>
  );
}

function Helper6Mw87EE5E03LjYh86AdIh52CkSvg() {
  return (
    <Wrapper4 additionalClassNames="size-[18px]">
      <g id="6mw87eE5e03LJYh86adIh52ck.svg">
        <path d={svgPaths.p208c8f00} fill="var(--fill-0, black)" id="Vector" />
      </g>
    </Wrapper4>
  );
}
type ContainerText3Props = {
  text: string;
};

function ContainerText3({ text }: ContainerText3Props) {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0">
      <div className="flex flex-col font-['Poppins:SemiBold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[18px] text-black tracking-[-0.54px] whitespace-nowrap">
        <p className="leading-[25.2px]">{text}</p>
      </div>
    </div>
  );
}

function Omcokd4NmXxKgAs4Ma23BHgUPngImage() {
  return (
    <Wrapper5>
      <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgOmcokd4NmXxKgAs4Ma23BHgUPng} />
    </Wrapper5>
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
    <Wrapper5>
      <img alt="" className="absolute left-0 max-w-none size-full top-0" src={img51Sd1CXkPIk1HFshQfpZ6BmR1GPng} />
    </Wrapper5>
  );
}

function IconMaskGroup() {
  return (
    <div className="absolute left-[32px] size-[80px] top-[32px]">
      <div className="absolute bg-black left-0 mask-position-[] size-[80px] top-0" data-name="Icon" />
    </div>
  );
}
type ContainerText2Props = {
  text: string;
};

function ContainerText2({ text }: ContainerText2Props) {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <div className="flex flex-col font-['Poppins:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[18px] text-white tracking-[-0.54px] w-full">
        <p className="leading-[25.2px]">{text}</p>
      </div>
    </div>
  );
}
type HeadingText3Props = {
  text: string;
};

function HeadingText3({ text }: HeadingText3Props) {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <div className="flex flex-col font-['Poppins:SemiBold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[32px] text-white tracking-[-1.28px] w-full">
        <p className="leading-[38.4px]">{text}</p>
      </div>
    </div>
  );
}
type ContainerText1Props = {
  text: string;
};

function ContainerText1({ text }: ContainerText1Props) {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <div className="flex flex-col font-['Poppins:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[18px] text-white tracking-[-0.54px] whitespace-nowrap">
        <p className="leading-[25.2px]">{text}</p>
      </div>
    </div>
  );
}

function Svg() {
  return (
    <Wrapper4 additionalClassNames="h-[18px] overflow-clip w-full">
      <g id="svg-1760747183_241">
        <path d={svgPaths.p1e650300} fill="var(--fill-0, #0055FF)" id="Vector" />
      </g>
    </Wrapper4>
  );
}

function Group1() {
  return (
    <div className="absolute inset-[26.23%_0.18%_30.67%_26.18%]">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 147.287 21.667">
        <g id="Group" opacity="0.84">
          <path d={svgPaths.p33f8af80} fill="var(--fill-0, white)" id="Vector" />
          <path d={svgPaths.p1d0f2380} fill="var(--fill-0, white)" id="Vector_2" />
          <path d={svgPaths.p26589a80} fill="var(--fill-0, white)" id="Vector_3" />
        </g>
      </svg>
    </div>
  );
}

function Group() {
  return (
    <div className="absolute inset-[8.33%_79.06%_8.33%_0]">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 41.8848 41.8848">
        <g id="Group" opacity="0.84">
          <path d={svgPaths.p25d58c00} fill="var(--fill-0, white)" id="Vector" />
          <path d={svgPaths.p2b2cbd00} fill="var(--fill-0, white)" id="Vector_2" opacity="0.6" />
          <path d={svgPaths.p3884cb00} fill="var(--fill-0, white)" id="Vector_3" opacity="0.32" />
          <path d={svgPaths.p6ea7900} fill="var(--fill-0, white)" id="Vector_4" opacity="0.07" />
          <path d={svgPaths.p3d497780} fill="var(--fill-0, white)" id="Vector_5" opacity="0.6" />
          <path d={svgPaths.p16cc18c0} fill="var(--fill-0, white)" id="Vector_6" opacity="0.32" />
          <path d={svgPaths.p29f8c00} fill="var(--fill-0, white)" id="Vector_7" opacity="0.07" />
          <path d={svgPaths.p283ea000} fill="var(--fill-0, white)" id="Vector_8" opacity="0.32" />
          <path d={svgPaths.pabb1200} fill="var(--fill-0, white)" id="Vector_9" opacity="0.07" />
          <path d={svgPaths.p3e31fc80} fill="var(--fill-0, white)" id="Vector_10" />
          <path d={svgPaths.p27a9f400} fill="var(--fill-0, white)" id="Vector_11" opacity="0.6" />
          <path d={svgPaths.p2d195300} fill="var(--fill-0, white)" id="Vector_12" opacity="0.32" />
          <path d={svgPaths.p39339a00} fill="var(--fill-0, white)" id="Vector_13" opacity="0.07" />
          <path d={svgPaths.p239d8e70} fill="var(--fill-0, white)" id="Vector_14" opacity="0.32" />
          <path d={svgPaths.p1dafad80} fill="var(--fill-0, white)" id="Vector_15" opacity="0.07" />
          <path d={svgPaths.p9f42af2} fill="var(--fill-0, white)" id="Vector_16" opacity="0.6" />
          <path d={svgPaths.p10edf480} fill="var(--fill-0, white)" id="Vector_17" opacity="0.32" />
          <path d={svgPaths.p3f21e400} fill="var(--fill-0, white)" id="Vector_18" opacity="0.07" />
        </g>
      </svg>
    </div>
  );
}
type ContainerTextProps = {
  text: string;
};

function ContainerText({ text }: ContainerTextProps) {
  return <Wrapper>{text}</Wrapper>;
}
type HeadingText2Props = {
  text: string;
};

function HeadingText2({ text }: HeadingText2Props) {
  return (
    <div className="absolute content-stretch flex flex-col inset-0 items-center">
      <div className="flex flex-col font-['Poppins:SemiBold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#05f] text-[72px] text-center tracking-[-2.88px] whitespace-nowrap">
        <p className="leading-[86.4px]">{text}</p>
      </div>
    </div>
  );
}
type HeadingText1Props = {
  text: string;
};

function HeadingText1({ text }: HeadingText1Props) {
  return (
    <div className="content-stretch flex flex-col items-center opacity-0 relative shrink-0">
      <div className="flex flex-col font-['Poppins:SemiBold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[72px] text-black text-center tracking-[-2.88px] whitespace-nowrap">
        <p className="leading-[86.4px]">{text}</p>
      </div>
    </div>
  );
}
type HeadingTextProps = {
  text: string;
};

function HeadingText({ text }: HeadingTextProps) {
  return <Wrapper1>{text}</Wrapper1>;
}

export default function Component1440WLight() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start relative size-full" data-name="1440w light">
      <div className="absolute bg-[#05f] h-[18px] left-[-8px] opacity-0 rounded-[99px] top-0 w-[16px]" data-name="Default" />
      <div className="absolute bottom-[6917.44px] content-stretch flex items-start justify-end left-0 p-[20px] w-[1440px]" data-name="Container">
        <div className="h-[38px] relative shrink-0 w-[140px]" data-name="Link - Light">
          <div className="absolute bg-white inset-px rounded-[10px] shadow-[0px_0.602px_1.566px_-1.5px_rgba(0,0,0,0.17),0px_2.289px_5.95px_-3px_rgba(0,0,0,0.14),0px_10px_26px_-4.5px_rgba(0,0,0,0.02)]" data-name="Backdrop" />
          <div className="absolute content-stretch flex gap-[10px] inset-[28.95%_7.5%] items-center" data-name="Content">
            <div className="h-[16px] relative shrink-0 w-[12px]" data-name="Container">
              <div className="-translate-x-1/2 absolute h-[20px] left-1/2 top-[-2px] w-[12px]" data-name="Logo:mask-group">
                <div className="-translate-x-1/2 absolute bg-black h-[20px] left-1/2 mask-position-[] top-0 w-[12px]" data-name="Logo" />
              </div>
            </div>
            <div className="h-[10px] relative shrink-0 w-[97px]" data-name="Text:mask-group">
              <div className="-translate-y-1/2 absolute bg-black h-[10px] left-0 mask-position-[] top-1/2 w-[97px]" data-name="Text" />
            </div>
          </div>
          <div className="absolute bg-[rgba(255,255,255,0)] inset-0 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0%_0%] mask-size-[100%_100%] opacity-6 rounded-[11px]" data-name="Bottom" style={{ maskImage: `url('${imgBottom}')` }}>
            <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_0px_0px_1px_black]" />
          </div>
          <div className="absolute bg-[rgba(255,255,255,0)] inset-0 opacity-4 rounded-[11px]" data-name="Border">
            <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_0px_0px_1px_black]" />
          </div>
        </div>
      </div>
      <div className="bg-white h-[7817.44px] min-h-[900px] overflow-clip relative shrink-0 w-full" data-name="End of bodyStart">
        <div className="absolute bg-white content-stretch flex h-[900px] items-end justify-center left-0 right-0 top-0" data-name="Main - Hero">
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <img alt="" className="absolute h-[131.02%] left-0 max-w-none top-0 w-full" src={imgMainHero} />
          </div>
          <div className="content-stretch flex gap-[20px] items-end overflow-clip px-[30px] py-[12px] relative shrink-0" data-name="Container">
            <div className="h-[192.77px] overflow-clip relative shrink-0 w-[1020px]" data-name="Heading">
              <div className="absolute bottom-[163.97px] content-stretch flex flex-col items-start justify-center left-0 w-[374px]" data-name="Container">
                <div className="content-stretch flex flex-col items-start pb-[0.8px] relative shrink-0 w-full" data-name="Heading 5">
                  <div className="flex flex-col font-['Poppins:SemiBold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[24px] text-white tracking-[-0.72px] whitespace-nowrap">
                    <p className="leading-[28.8px]">{`Web & product design specialist`}</p>
                  </div>
                </div>
              </div>
              <div className="absolute bottom-0 content-stretch flex flex-col items-start left-0 overflow-clip right-0" data-name="SVG">
                <div className="h-[139.969px] shrink-0 w-full" data-name="Frame" />
                <div className="absolute inset-0 overflow-clip" data-name="Container">
                  <div className="absolute content-stretch flex flex-col items-center left-0 right-0 top-[-0.52px]" data-name="Heading 1">
                    <div className="flex flex-col font-['Poppins:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[174.4px] text-center text-white tracking-[-8.7204px] whitespace-nowrap">
                      <p className="leading-[139.526px]">Martha Rae®</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-row items-end self-stretch">
              <div className="content-stretch flex h-full items-start relative shrink-0" data-name="Container:align-stretch">
                <div className="h-full shrink-0 w-[340px]" data-name="Container" />
              </div>
            </div>
          </div>
        </div>
        <div className="absolute content-stretch flex flex-col items-center left-0 min-w-[1440px] py-[80px] right-0 top-[900px]" data-name="Section - About">
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
                          <HeadingText1 text="10+" />
                          <HeadingText2 text="10+" />
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
                        <HeadingText1 text="500+" />
                        <HeadingText2 text="500+" />
                      </div>
                      <div className="content-stretch flex flex-col items-start justify-center relative shrink-0 w-[236.39px]" data-name="Container">
                        <ContainerText text="Projects completed" />
                      </div>
                    </div>
                    <div className="absolute content-stretch flex flex-col gap-[8px] items-start justify-center left-0 right-[434px] top-[190.41px]" data-name="Desktop">
                      <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
                        <HeadingText1 text="98%" />
                        <HeadingText2 text="98%" />
                      </div>
                      <div className="content-stretch flex flex-col items-start justify-center relative shrink-0 w-[236.39px]" data-name="Container">
                        <ContainerText text="Client satisfaction rate" />
                      </div>
                    </div>
                    <div className="absolute content-stretch flex flex-col gap-[8px] items-start justify-center left-[434px] right-0 top-[190.41px]" data-name="Desktop">
                      <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
                        <HeadingText1 text="24/7" />
                        <HeadingText2 text="24/7" />
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
        <div className="absolute content-stretch flex flex-col items-center justify-center left-0 min-w-[1440px] pb-[48px] pt-[47px] right-0 top-[2167.16px]" data-name="Section - Client">
          <div className="max-w-[1500px] relative shrink-0 w-full" data-name="Container">
            <div className="flex flex-col items-center max-w-[inherit] size-full">
              <div className="content-stretch flex flex-col gap-[31.99px] items-center max-w-[inherit] px-[30px] relative w-full">
                <div className="content-stretch flex flex-col items-start justify-center relative shrink-0 w-[1242px]" data-name="Title">
                  <div className="content-stretch flex flex-col items-center pb-[0.8px] relative shrink-0 w-full" data-name="Heading 5">
                    <div className="flex flex-col font-['Poppins:SemiBold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[24px] text-black text-center tracking-[-0.72px] whitespace-nowrap">
                      <p className="leading-[28.8px]">{`Trusted by brands & founders`}</p>
                    </div>
                  </div>
                </div>
                <div className="content-stretch flex flex-col h-[120px] items-start justify-center relative shrink-0 w-full" data-name="Desktop">
                  <div className="flex-[1_0_0] min-h-px min-w-px relative w-full" data-name="Section:mask-group">
                    <div className="absolute content-stretch flex inset-[0_0_0_-156.24px] items-center justify-center mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[10.17%_0%] mask-size-[89.83%_100%] pr-[156.24px]" data-name="Section" style={{ maskImage: `url('${imgSection}')` }}>
                      <div className="flex-[1_0_0] h-full min-h-px min-w-px relative" data-name="List">
                        <div className="-translate-y-1/2 absolute content-stretch flex flex-col items-start left-[-1.26px] pr-[1.26px] top-1/2" data-name="Item">
                          <div className="bg-[#333] content-stretch flex h-[120px] items-center justify-center overflow-clip p-[20px] relative rounded-[12px] shrink-0 w-[240px]" data-name="1 / Logo">
                            <div className="content-stretch flex flex-[1_0_0] flex-col h-full items-start min-h-px min-w-px overflow-clip relative" data-name="company logo → ErZtPX3l2bHBJ6ponx4ryQNgLc.svg">
                              <div className="content-stretch flex flex-col h-[80px] items-center justify-center overflow-clip py-[14.869px] relative shrink-0 w-[200px]" data-name="ErZtPX3l2bHBJ6ponx4ryQNgLc.svg fill">
                                <div className="h-[50.262px] overflow-clip relative shrink-0 w-[200px]" data-name="ErZtPX3l2bHBJ6ponx4ryQNgLc.svg">
                                  <Group />
                                  <Group1 />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="-translate-y-1/2 absolute content-stretch flex flex-col items-start left-[245.49px] pr-[1.25px] top-1/2" data-name="Item">
                          <div className="bg-[#333] content-stretch flex h-[120px] items-center justify-center overflow-clip p-[20px] relative rounded-[12px] shrink-0 w-[240px]" data-name="2 / Logo">
                            <div className="content-stretch flex flex-[1_0_0] flex-col h-full items-start min-h-px min-w-px overflow-clip relative" data-name="company logo → je0rehkooHhiW49wLjk5CfdwsrY.svg">
                              <div className="content-stretch flex flex-col h-[80px] items-center justify-center overflow-clip py-[16.119px] relative shrink-0 w-[200px]" data-name="je0rehkooHhiW49wLjk5CfdwsrY.svg fill">
                                <div className="h-[47.761px] relative shrink-0 w-[200px]" data-name="je0rehkooHhiW49wLjk5CfdwsrY.svg">
                                  <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 200 47.7612">
                                    <g id="je0rehkooHhiW49wLjk5CfdwsrY.svg">
                                      <path clipRule="evenodd" d={svgPaths.p2a3d1cf0} fill="var(--fill-0, white)" fillRule="evenodd" id="Vector" opacity="0.84" />
                                      <path d={svgPaths.p3d363040} fill="var(--fill-0, white)" id="Vector_2" opacity="0.84" />
                                    </g>
                                  </svg>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="-translate-y-1/2 absolute content-stretch flex flex-col items-start left-[493.49px] top-1/2" data-name="Item">
                          <div className="bg-[#333] content-stretch flex h-[120px] items-center justify-center overflow-clip p-[20px] relative rounded-[12px] shrink-0 w-[240px]" data-name="3 / Logo">
                            <div className="content-stretch flex flex-[1_0_0] flex-col h-full items-start min-h-px min-w-px overflow-clip relative" data-name="company logo → IzwDz5o1R9eS50qoSnSTOLkVSY.svg">
                              <div className="content-stretch flex flex-col h-[80px] items-center justify-center overflow-clip py-[18.667px] relative shrink-0 w-[200px]" data-name="IzwDz5o1R9eS50qoSnSTOLkVSY.svg fill">
                                <div className="h-[42.667px] relative shrink-0 w-[200px]" data-name="IzwDz5o1R9eS50qoSnSTOLkVSY.svg">
                                  <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 200 42.6667">
                                    <g id="IzwDz5o1R9eS50qoSnSTOLkVSY.svg">
                                      <path d={svgPaths.p598c000} id="Vector" opacity="0.84" stroke="var(--stroke-0, white)" strokeWidth="3.55556" />
                                      <path d={svgPaths.p2eed2f00} fill="var(--fill-0, white)" id="Vector_2" opacity="0.84" />
                                    </g>
                                  </svg>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="-translate-y-1/2 absolute content-stretch flex flex-col items-start left-[740.25px] pr-[1.24px] top-1/2" data-name="Item">
                          <div className="bg-[#333] content-stretch flex h-[120px] items-center justify-center overflow-clip p-[20px] relative rounded-[12px] shrink-0 w-[240px]" data-name="4 / Logo">
                            <div className="content-stretch flex flex-[1_0_0] flex-col h-full items-start min-h-px min-w-px overflow-clip relative" data-name="company logo → flU0Xjxbt24jBVL1VRlAWn94.svg">
                              <div className="content-stretch flex flex-col h-[80px] items-center justify-center overflow-clip py-[15.758px] relative shrink-0 w-[200px]" data-name="flU0Xjxbt24jBVL1VRlAWn94.svg fill">
                                <div className="h-[48.485px] relative shrink-0 w-[200px]" data-name="flU0Xjxbt24jBVL1VRlAWn94.svg">
                                  <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 200 48.4848">
                                    <g clipPath="url(#clip0_1_46)" id="flU0Xjxbt24jBVL1VRlAWn94.svg">
                                      <g id="Group" opacity="0.84">
                                        <path clipRule="evenodd" d={svgPaths.p1e991500} fill="var(--fill-0, white)" fillRule="evenodd" id="Vector" />
                                        <path clipRule="evenodd" d={svgPaths.p23995f00} fill="var(--fill-0, white)" fillRule="evenodd" id="Vector_2" opacity="0.5" />
                                      </g>
                                      <path d={svgPaths.p8b75980} fill="var(--fill-0, white)" id="Vector_3" opacity="0.84" />
                                    </g>
                                    <defs>
                                      <clipPath id="clip0_1_46">
                                        <rect fill="white" height="48.4848" width="200" />
                                      </clipPath>
                                    </defs>
                                  </svg>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="-translate-y-1/2 absolute content-stretch flex flex-col items-start left-[987px] pr-[1.25px] top-1/2" data-name="Item">
                          <div className="bg-[#333] content-stretch flex h-[120px] items-center justify-center overflow-clip p-[20px] relative rounded-[12px] shrink-0 w-[240px]" data-name="5 / Logo">
                            <div className="content-stretch flex flex-[1_0_0] flex-col h-full items-start min-h-px min-w-px overflow-clip relative" data-name="company logo → m9MueD5TgQm9cPb1nz0x8wL74.svg">
                              <div className="content-stretch flex flex-col h-[80px] items-center justify-center overflow-clip py-[10px] relative shrink-0 w-[200px]" data-name="m9MueD5TgQm9cPb1nz0x8wL74.svg fill">
                                <div className="h-[60px] relative shrink-0 w-[200px]" data-name="m9MueD5TgQm9cPb1nz0x8wL74.svg">
                                  <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 200 60">
                                    <g id="m9MueD5TgQm9cPb1nz0x8wL74.svg">
                                      <path d={svgPaths.p1c80afb0} fill="var(--fill-0, white)" id="Vector" opacity="0.84" />
                                    </g>
                                  </svg>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="-translate-y-1/2 absolute content-stretch flex flex-col items-start left-[1235px] top-1/2" data-name="Item">
                          <div className="bg-[#333] content-stretch flex h-[120px] items-center justify-center overflow-clip p-[20px] relative rounded-[12px] shrink-0 w-[240px]" data-name="6 / Logo">
                            <div className="content-stretch flex flex-[1_0_0] flex-col h-full items-start min-h-px min-w-px overflow-clip relative" data-name="company logo → xHpI8wyv9kptnKTCpqb6k6lgY.svg">
                              <div className="content-stretch flex flex-col h-[80px] items-center justify-center overflow-clip py-[11.93px] relative shrink-0 w-[200px]" data-name="xHpI8wyv9kptnKTCpqb6k6lgY.svg fill">
                                <div className="h-[56.14px] relative shrink-0 w-[200px]" data-name="xHpI8wyv9kptnKTCpqb6k6lgY.svg">
                                  <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 200 56.1404">
                                    <g id="xHpI8wyv9kptnKTCpqb6k6lgY.svg">
                                      <g id="Group" opacity="0.84">
                                        <path d={svgPaths.p2be8340} fill="var(--fill-0, white)" id="Vector" />
                                        <path d={svgPaths.p2ae0bb00} fill="var(--fill-0, white)" id="Vector_2" />
                                      </g>
                                      <path d={svgPaths.p2f717100} fill="var(--fill-0, white)" id="Vector_3" opacity="0.84" />
                                    </g>
                                  </svg>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="-translate-y-1/2 absolute content-stretch flex flex-col items-start left-[1481.75px] pr-[1.25px] top-1/2" data-name="Item">
                          <div className="bg-[#333] content-stretch flex h-[120px] items-center justify-center overflow-clip p-[20px] relative rounded-[12px] shrink-0 w-[240px]" data-name="1 / Logo">
                            <div className="content-stretch flex flex-[1_0_0] flex-col h-full items-start min-h-px min-w-px overflow-clip relative" data-name="company logo → ErZtPX3l2bHBJ6ponx4ryQNgLc.svg">
                              <div className="content-stretch flex flex-col h-[80px] items-center justify-center overflow-clip py-[14.869px] relative shrink-0 w-[200px]" data-name="ErZtPX3l2bHBJ6ponx4ryQNgLc.svg fill">
                                <div className="h-[50.262px] overflow-clip relative shrink-0 w-[200px]" data-name="ErZtPX3l2bHBJ6ponx4ryQNgLc.svg">
                                  <Group />
                                  <Group1 />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="-translate-y-1/2 absolute h-[120px] left-[1729.75px] top-1/2 w-[240px]" data-name="Item" />
                        <div className="-translate-y-1/2 absolute h-[120px] left-[1977.75px] top-1/2 w-[240px]" data-name="Item" />
                        <div className="-translate-y-1/2 absolute h-[120px] left-[2225.75px] top-1/2 w-[240px]" data-name="Item" />
                        <div className="-translate-y-1/2 absolute h-[120px] left-[2472.5px] top-1/2 w-[240px]" data-name="Item" />
                        <div className="-translate-y-1/2 absolute h-[120px] left-[2720.5px] top-1/2 w-[240px]" data-name="Item" />
                        <div className="-translate-y-1/2 absolute h-[120px] left-[2967.24px] top-1/2 w-[240px]" data-name="Item" />
                        <div className="-translate-y-1/2 absolute h-[120px] left-[3215.24px] top-1/2 w-[240px]" data-name="Item" />
                        <div className="-translate-y-1/2 absolute h-[120px] left-[3463.24px] top-1/2 w-[240px]" data-name="Item" />
                        <div className="-translate-y-1/2 absolute h-[120px] left-[3710px] top-1/2 w-[240px]" data-name="Item" />
                        <div className="-translate-y-1/2 absolute h-[120px] left-[3958px] top-1/2 w-[240px]" data-name="Item" />
                        <div className="-translate-y-1/2 absolute h-[120px] left-[4206px] top-1/2 w-[240px]" data-name="Item" />
                        <div className="-translate-y-1/2 absolute h-[120px] left-[4452.75px] top-1/2 w-[240px]" data-name="Item" />
                        <div className="-translate-y-1/2 absolute h-[120px] left-[4700.75px] top-1/2 w-[240px]" data-name="Item" />
                        <div className="-translate-y-1/2 absolute h-[120px] left-[4948.75px] top-1/2 w-[240px]" data-name="Item" />
                        <div className="-translate-y-1/2 absolute h-[120px] left-[5195.5px] top-1/2 w-[240px]" data-name="Item" />
                        <div className="-translate-y-1/2 absolute h-[120px] left-[5443.5px] top-1/2 w-[240px]" data-name="Item" />
                        <div className="-translate-y-1/2 absolute h-[120px] left-[5690.25px] top-1/2 w-[240px]" data-name="Item" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute content-stretch flex flex-col items-center justify-center left-0 overflow-clip py-[80px] right-0 top-[2443.95px]" data-name="Section - Project">
          <Container>
            <div className="content-stretch flex gap-[10px] h-[76.8px] items-center justify-center overflow-clip pb-px relative shrink-0 w-full" data-name="Header">
              <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px pb-[0.8px] relative" data-name="Title → Heading 2">
                <div className="flex flex-col font-['Poppins:SemiBold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[64px] text-black tracking-[-3.2px] w-full">
                  <p className="leading-[76.8px]">Selected projects</p>
                </div>
              </div>
              <div className="bg-[#05f] content-stretch flex gap-[8px] items-center justify-center p-[8px] relative rounded-[99px] shrink-0" data-name="Link - L">
                <Icon>
                  <div className="aspect-[18/18] content-stretch flex flex-col items-start justify-center relative w-full" data-name="Arrow-right">
                    <Svg />
                  </div>
                </Icon>
                <div className="content-stretch flex items-center justify-center pr-[12px] relative shrink-0" data-name="Text">
                  <div className="content-stretch flex flex-col items-start relative shrink-0 w-[66px]" data-name="Button">
                    <ContainerText1 text="View all" />
                  </div>
                </div>
              </div>
            </div>
            <div className="h-[1773.66px] max-w-[1800px] relative shrink-0 w-full" data-name="Project List">
              <div className="absolute content-stretch flex items-center left-0 right-[702px] top-0" data-name="Link">
                <div className="aspect-[678/874.8300170898438] content-stretch flex flex-col items-start justify-center relative shrink-0" data-name="Container">
                  <div className="content-stretch flex flex-col items-center overflow-clip relative rounded-[12px] shrink-0 w-full" data-name="Desktop">
                    <div className="h-[874.83px] overflow-clip relative rounded-[12px] shrink-0 w-full" data-name="image">
                      <Wrapper6>
                        <img alt="" className="absolute h-full left-[-1.64%] max-w-none top-0 w-[103.33%]" src={imgUmSejRwRpAiAgF19RGdqDfiw1WiJpg} />
                      </Wrapper6>
                    </div>
                    <div className="absolute bg-black inset-0 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0px_0px] mask-size-[678px_874.83px] rounded-[12px]" data-name="Overlay" style={{ maskImage: `url('${imgOverlay}')` }} />
                    <div className="absolute bottom-[-1.39px] content-stretch flex flex-col gap-[8px] items-center justify-end left-0 p-[24px] right-0 rounded-[12px]" data-name="Content">
                      <div className="content-stretch flex flex-col items-start justify-center relative shrink-0 w-full" data-name="Title">
                        <HeadingText3 text="Raincoat ®" />
                      </div>
                      <div className="content-stretch flex flex-col items-start justify-center relative shrink-0 w-full" data-name="Text">
                        <ContainerText2 text="UI/UX Design, Web Development" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute content-stretch flex items-center left-[702px] right-0 top-0" data-name="Link">
                <div className="aspect-[678/874.8300170898438] content-stretch flex flex-col items-start justify-center relative shrink-0" data-name="Container">
                  <div className="content-stretch flex flex-col items-center overflow-clip relative rounded-[12px] shrink-0 w-full" data-name="Desktop">
                    <div className="h-[874.83px] overflow-clip relative rounded-[12px] shrink-0 w-full" data-name="image">
                      <Wrapper6>
                        <img alt="" className="absolute h-full left-[-1.9%] max-w-none top-0 w-[103.33%]" src={imgXn5L9Bkbqascxmz7FJmTd1TFcJpg} />
                      </Wrapper6>
                    </div>
                    <div className="absolute bg-black inset-0 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0px_0px] mask-size-[678px_874.83px] rounded-[12px]" data-name="Overlay" style={{ maskImage: `url('${imgOverlay}')` }} />
                    <div className="absolute bottom-[-1.39px] content-stretch flex flex-col gap-[8px] items-center justify-end left-0 p-[24px] right-0 rounded-[12px]" data-name="Content">
                      <div className="content-stretch flex flex-col items-start justify-center relative shrink-0 w-full" data-name="Title">
                        <HeadingText3 text="Moisturiser ®" />
                      </div>
                      <div className="content-stretch flex flex-col items-start justify-center relative shrink-0 w-full" data-name="Text">
                        <ContainerText2 text="Branding, Web Development" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute content-stretch flex items-center left-0 right-[702px] top-[898.83px]" data-name="Link">
                <div className="aspect-[678/874.8300170898438] content-stretch flex flex-col items-start justify-center relative shrink-0" data-name="Container">
                  <div className="content-stretch flex flex-col items-center overflow-clip relative rounded-[12px] shrink-0 w-full" data-name="Desktop">
                    <div className="h-[874.83px] overflow-clip relative rounded-[12px] shrink-0 w-full" data-name="image">
                      <Wrapper6>
                        <img alt="" className="absolute h-full left-[-1.54%] max-w-none top-0 w-[103.07%]" src={imgIvQf9I1TkyViYt8QXaBBgDg40UJpg} />
                      </Wrapper6>
                    </div>
                    <div className="absolute bg-black inset-0 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0px_0px] mask-size-[678px_874.83px] rounded-[12px]" data-name="Overlay" style={{ maskImage: `url('${imgOverlay}')` }} />
                    <div className="absolute bottom-[-1.39px] content-stretch flex flex-col gap-[8px] items-center justify-end left-0 p-[24px] right-0 rounded-[12px]" data-name="Content">
                      <div className="content-stretch flex flex-col items-start justify-center relative shrink-0 w-full" data-name="Title">
                        <HeadingText3 text="Speed ®" />
                      </div>
                      <div className="content-stretch flex flex-col items-start justify-center relative shrink-0 w-full" data-name="Text">
                        <ContainerText2 text="Product Design, App Development" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute content-stretch flex items-center left-[702px] right-0 top-[898.83px]" data-name="Link">
                <div className="aspect-[678/874.8300170898438] content-stretch flex flex-col items-start justify-center relative shrink-0" data-name="Container">
                  <div className="content-stretch flex flex-col items-center overflow-clip relative rounded-[12px] shrink-0 w-full" data-name="Desktop">
                    <div className="h-[874.83px] overflow-clip relative rounded-[12px] shrink-0 w-full" data-name="image">
                      <Wrapper6>
                        <img alt="" className="absolute h-full left-[-1.6%] max-w-none top-0 w-[103.2%]" src={imgTsopj1Hwjz07Wo2ZoXWj3B1X3KJpg} />
                      </Wrapper6>
                    </div>
                    <div className="absolute bg-black inset-0 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0px_0px] mask-size-[678px_874.83px] rounded-[12px]" data-name="Overlay" style={{ maskImage: `url('${imgOverlay}')` }} />
                    <div className="absolute bottom-[-1.39px] content-stretch flex flex-col gap-[8px] items-center justify-end left-0 p-[24px] right-0 rounded-[12px]" data-name="Content">
                      <div className="content-stretch flex flex-col items-start justify-center relative shrink-0 w-full" data-name="Title">
                        <HeadingText3 text="Greendale ®" />
                      </div>
                      <div className="content-stretch flex flex-col items-start justify-center relative shrink-0 w-full" data-name="Text">
                        <ContainerText2 text="Web Development, Interactive Design" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </div>
        <div className="absolute content-stretch flex flex-col items-center justify-center left-0 pb-[64px] pt-[80px] right-0 top-[4502.41px]" data-name="Section - Service">
          <Wrapper2>
            <div className="content-stretch flex flex-col gap-[47.99px] items-center justify-center max-w-[inherit] px-[30px] relative w-full">
              <div className="h-[76.8px] overflow-clip relative shrink-0 w-full" data-name="Header → Title → Heading 2">
                <div className="-translate-y-1/2 absolute flex flex-col font-['Poppins:SemiBold',sans-serif] justify-center leading-[0] left-0 not-italic text-[64px] text-black top-[37.5px] tracking-[-3.2px] w-[339.492px]">
                  <p className="leading-[76.8px]">What i offer</p>
                </div>
              </div>
              <div className="content-stretch flex gap-[24px] h-[364.8px] items-start justify-center overflow-clip relative shrink-0 w-full" data-name="Content">
                <div className="bg-[#fafafa] flex-[1_0_0] min-h-px min-w-px overflow-clip relative rounded-[16px] self-stretch" data-name="Desktop">
                  <IconMaskGroup />
                  <HeadingText text="Web Design" />
                  <Body>
                    <p className="mb-0">{`Crafting clean, user-centered `}</p>
                    <p className="mb-0">{`interfaces using Figma — from `}</p>
                    <p className="mb-0">{`wireframes to high-fidelity visuals that `}</p>
                    <p>elevate your brand’s look and feel.</p>
                  </Body>
                  <div className="absolute bg-[#d4d4d4] right-[32px] rounded-[99px] size-[16px] top-[32px]" data-name="Dot" />
                </div>
                <div className="bg-[#fafafa] flex-[1_0_0] min-h-px min-w-px overflow-clip relative rounded-[16px] self-stretch" data-name="Desktop">
                  <IconMaskGroup />
                  <HeadingText text="Web Development" />
                  <Body>
                    <p className="mb-0">{`Building smooth, responsive websites `}</p>
                    <p className="mb-0">{`with Framer — no-code, fast-loading, `}</p>
                    <p className="mb-0">{`and optimized across devices for `}</p>
                    <p>performance and interactivity.</p>
                  </Body>
                  <div className="absolute bg-[#d4d4d4] right-[32px] rounded-[99px] size-[16px] top-[32px]" data-name="Dot" />
                </div>
                <div className="bg-[#fafafa] flex-[1_0_0] min-h-px min-w-px overflow-clip relative rounded-[16px] self-stretch" data-name="Desktop">
                  <IconMaskGroup />
                  <Wrapper1>{`Full Solution `}</Wrapper1>
                  <Body>
                    <p className="mb-0">{`Delivering end-to-end digital solutions `}</p>
                    <p className="mb-0">{`— from design in Figma to launch in `}</p>
                    <p className="mb-0">{`Framer, including strategy, setup, and `}</p>
                    <p>ongoing support.</p>
                  </Body>
                  <div className="absolute bg-[#d4d4d4] right-[32px] rounded-[99px] size-[16px] top-[32px]" data-name="Dot" />
                </div>
              </div>
            </div>
          </Wrapper2>
        </div>
        <div className="absolute content-stretch flex flex-col items-center justify-center left-0 py-[80px] right-0 top-[5136px]" data-name="Section - Testimonials">
          <Container>
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
                              <Body1>
                                <p className="mb-0">{`Felt seamless from start to finish. They understood our `}</p>
                                <p>brand instantly and delivered beyond expectations.</p>
                              </Body1>
                            </Default>
                          </div>
                        </div>
                        <div className="content-stretch flex flex-col h-[296.2px] items-start justify-center relative shrink-0 w-full" data-name="Item">
                          <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative w-full" data-name="2">
                            <Default>
                              <div className="content-stretch flex flex-col gap-[12px] items-start justify-center relative shrink-0 w-full" data-name="Profile">
                                <div className="relative rounded-[999px] shrink-0 size-[48px]" data-name="Image">
                                  <Wrapper5>
                                    <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgSD4PdSOcgKVahKlNjxsRbmmcPng} />
                                  </Wrapper5>
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
                              <Body1>
                                <p className="mb-0">{`A rare blend of creative talent and technical precision. I `}</p>
                                <p>would definitely recommend their services.</p>
                              </Body1>
                            </Default>
                          </div>
                        </div>
                        <div className="content-stretch flex flex-col h-[296.2px] items-start relative shrink-0 w-full" data-name="Item → 3">
                          <Default>
                            <div className="content-stretch flex flex-col gap-[12px] items-start justify-center relative shrink-0 w-full" data-name="Profile">
                              <div className="relative rounded-[999px] shrink-0 size-[48px]" data-name="Image">
                                <Wrapper5>
                                  <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgLtXwuk19JVnnHfpUffPnZq3IyPng} />
                                </Wrapper5>
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
                            <Body1>
                              <p className="mb-0">{`They were responsive, thoughtful, and brought a lot of `}</p>
                              <p>clarity to our website project. I love the final result!</p>
                            </Body1>
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
                  <div className="absolute content-stretch flex inset-0 items-center justify-center mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0%_0%] mask-size-[100%_100%] pb-[797.91px]" data-name="Section" style={{ maskImage: `url('${imgSection1}')` }}>
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
                                <Wrapper5>
                                  <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgS9JdBus4XRoXhTbActbjHz9FcwPng} />
                                </Wrapper5>
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
                            <Body1>
                              <p className="mb-0">{`Super professional and detail-oriented. They brought `}</p>
                              <p className="mb-0">{`our online store to life with smooth UX and clean `}</p>
                              <p>design.</p>
                            </Body1>
                          </Default>
                        </div>
                      </div>
                      <div className="content-stretch flex flex-col h-[317.2px] items-start relative shrink-0 w-full" data-name="Item → 5">
                        <Default>
                          <div className="content-stretch flex flex-col gap-[12px] items-start justify-center relative shrink-0 w-full" data-name="Profile">
                            <div className="relative rounded-[999px] shrink-0 size-[48px]" data-name="Image">
                              <Wrapper5>
                                <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgI24AvTbn6G8JXz1RywBkMka9BaIPng} />
                              </Wrapper5>
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
                          <Body1>
                            <p className="mb-0">{`Every interaction felt purposeful. The design process `}</p>
                            <p className="mb-0">{`was collaborative and the final outcome speaks for `}</p>
                            <p>itself.</p>
                          </Body1>
                        </Default>
                      </div>
                      <div className="content-stretch flex flex-col h-[317.2px] items-start justify-center relative shrink-0 w-full" data-name="Item">
                        <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative w-full" data-name="6">
                          <div className="bg-[#fafafa] relative rounded-[8px] shrink-0 w-full" data-name="Default">
                            <div className="content-stretch flex flex-col gap-[24.33px] items-start px-[24px] py-[48px] relative w-full">
                              <div className="content-stretch flex flex-col gap-[12px] items-start justify-center relative shrink-0 w-full" data-name="Profile">
                                <div className="relative rounded-[999px] shrink-0 size-[48px]" data-name="Image">
                                  <Wrapper5>
                                    <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgJ1T7WaWiikFt0FZxS5YIhWvv5QPng} />
                                  </Wrapper5>
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
                              <Body1>
                                <p className="mb-0">{`Insightful design choices paired with technical finesse. `}</p>
                                <p>Our users noticed the improvement instantly.</p>
                              </Body1>
                            </Default>
                          </div>
                        </div>
                        <div className="content-stretch flex flex-col h-[296.2px] items-start justify-center relative shrink-0 w-full" data-name="Item">
                          <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative w-full" data-name="8">
                            <Default>
                              <div className="content-stretch flex flex-col gap-[12px] items-start justify-center relative shrink-0 w-full" data-name="Profile">
                                <div className="relative rounded-[999px] shrink-0 size-[48px]" data-name="Image">
                                  <Wrapper5>
                                    <img alt="" className="absolute left-0 max-w-none size-full top-0" src={img9KmJ6R8LH8HtkTuazjo7TFmOeWaPng} />
                                  </Wrapper5>
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
                              <Body1>
                                <p className="mb-0">{`I now have a portfolio that truly reflects my work. `}</p>
                                <p>Simple, elegant, and fast — exactly what I needed.</p>
                              </Body1>
                            </Default>
                          </div>
                        </div>
                        <div className="content-stretch flex flex-col h-[296.2px] items-start relative shrink-0 w-full" data-name="Item → 9">
                          <Default>
                            <div className="content-stretch flex flex-col gap-[12px] items-start justify-center relative shrink-0 w-full" data-name="Profile">
                              <div className="relative rounded-[999px] shrink-0 size-[48px]" data-name="Image">
                                <Wrapper5>
                                  <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgIgLSwWb5YYpOr73SkXcfi9OiStgPng} />
                                </Wrapper5>
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
                            <Body1>
                              <p className="mb-0">{`The UX flow is clean and intuitive. It made onboarding `}</p>
                              <p>users feel effortless. Great collaboration from day one.</p>
                            </Body1>
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
          </Container>
        </div>
        <div className="-translate-x-1/2 absolute left-1/2 size-[0.01px] top-[6340.8px]" data-name="Rectangle" />
        <div className="absolute bg-white content-stretch flex flex-col items-center left-0 py-[80px] right-0 top-[6340.8px]" data-name="Section - FAQ">
          <div className="h-[528.42px] max-w-[1500px] relative shrink-0 w-full" data-name="Container">
            <div className="absolute content-stretch flex flex-col items-start left-[30px] pb-[0.595px] right-[963.33px] top-[-1.21px]" data-name="Heading 2">
              <div className="flex flex-col font-['Poppins:SemiBold',sans-serif] justify-center leading-[76.8px] not-italic relative shrink-0 text-[64px] text-black tracking-[-3.2px] whitespace-nowrap whitespace-pre">
                <p className="mb-0">{`Frequently `}</p>
                <p className="mb-0">{`asked `}</p>
                <p>{`questions `}</p>
              </div>
            </div>
            <div className="absolute content-stretch flex flex-col items-start left-[516.67px] right-[30px] top-0" data-name="Container">
              <BackgroundHorizontalBorder>
                <Container1>
                  <ContainerText3 text="What type of clients do you work with?" />
                  <Wrapper3>
                    <div className="content-stretch flex flex-col items-start overflow-clip relative size-[18px]" data-name="icon">
                      <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 size-[18px]" data-name="6mw87eE5e03LJYh86adIh52ck.svg fill">
                        <Helper6Mw87EE5E03LjYh86AdIh52CkSvg />
                      </div>
                    </div>
                  </Wrapper3>
                </Container1>
                <div className="h-[65px] relative shrink-0 w-full" data-name="Container">
                  <div className="bg-clip-padding border-0 border-[transparent] border-solid overflow-clip relative rounded-[inherit] size-full">
                    <div className="absolute content-stretch flex items-start left-0 pb-[20.605px] pl-[20px] pr-[40px] right-0 top-[-0.8px]" data-name="Container">
                      <div className="flex flex-col font-['Poppins:Medium',sans-serif] justify-center leading-[22.4px] not-italic relative shrink-0 text-[#4e4e4e] text-[16px] tracking-[-0.48px] whitespace-nowrap">
                        <p className="mb-0">I collaborate with entrepreneurs, startups, creative professionals, and growing businesses looking for high-</p>
                        <p>quality web design and development solutions tailored to their brand.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </BackgroundHorizontalBorder>
              <BackgroundHorizontalBorder>
                <Container1>
                  <ContainerText3 text="How can you help improve my online presence?" />
                  <div className="content-stretch flex flex-col h-[18px] items-start pl-[20px] relative shrink-0 w-[38px]" data-name="Img - icon:margin">
                    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 size-[18px]" data-name="icon">
                      <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 size-[18px]" data-name="6mw87eE5e03LJYh86adIh52ck.svg fill">
                        <Helper6Mw87EE5E03LjYh86AdIh52CkSvg />
                      </div>
                    </div>
                  </div>
                </Container1>
              </BackgroundHorizontalBorder>
              <BackgroundHorizontalBorder>
                <Container1>
                  <ContainerText3 text="Do you offer both design and development services?" />
                  <div className="content-stretch flex flex-col h-[18px] items-start pl-[20px] relative shrink-0 w-[38px]" data-name="Img - icon:margin">
                    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 size-[18px]" data-name="icon">
                      <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 size-[18px]" data-name="6mw87eE5e03LJYh86adIh52ck.svg fill">
                        <Helper6Mw87EE5E03LjYh86AdIh52CkSvg />
                      </div>
                    </div>
                  </div>
                </Container1>
              </BackgroundHorizontalBorder>
              <BackgroundHorizontalBorder>
                <Container1>
                  <ContainerText3 text="What’s your process for working on a project?" />
                  <div className="content-stretch flex flex-col h-[18px] items-start pl-[20px] relative shrink-0 w-[38px]" data-name="Img - icon:margin">
                    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 size-[18px]" data-name="icon">
                      <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 size-[18px]" data-name="6mw87eE5e03LJYh86adIh52ck.svg fill">
                        <Helper6Mw87EE5E03LjYh86AdIh52CkSvg />
                      </div>
                    </div>
                  </div>
                </Container1>
              </BackgroundHorizontalBorder>
              <BackgroundHorizontalBorder>
                <Container1>
                  <ContainerText3 text="How long does a project typically take?" />
                  <div className="content-stretch flex flex-col h-[18px] items-start pl-[20px] relative shrink-0 w-[38px]" data-name="Img - icon:margin">
                    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 size-[18px]" data-name="icon">
                      <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 size-[18px]" data-name="6mw87eE5e03LJYh86adIh52ck.svg fill">
                        <Helper6Mw87EE5E03LjYh86AdIh52CkSvg />
                      </div>
                    </div>
                  </div>
                </Container1>
              </BackgroundHorizontalBorder>
              <BackgroundHorizontalBorder>
                <Container1>
                  <ContainerText3 text="Do you offer ongoing support and maintenance?" />
                  <div className="content-stretch flex flex-col h-[18px] items-start pl-[20px] relative shrink-0 w-[38px]" data-name="Img - icon:margin">
                    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 size-[18px]" data-name="icon">
                      <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 size-[18px]" data-name="6mw87eE5e03LJYh86adIh52ck.svg fill">
                        <Helper6Mw87EE5E03LjYh86AdIh52CkSvg />
                      </div>
                    </div>
                  </div>
                </Container1>
              </BackgroundHorizontalBorder>
              <BackgroundHorizontalBorder>
                <Container1>
                  <ContainerText3 text="How do we get started?" />
                  <div className="content-stretch flex flex-col h-[18px] items-start pl-[20px] relative shrink-0 w-[38px]" data-name="Img - icon:margin">
                    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 size-[18px]" data-name="icon">
                      <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 size-[18px]" data-name="6mw87eE5e03LJYh86adIh52ck.svg fill">
                        <Helper6Mw87EE5E03LjYh86AdIh52CkSvg />
                      </div>
                    </div>
                  </div>
                </Container1>
              </BackgroundHorizontalBorder>
            </div>
            <div className="absolute bottom-0 content-stretch flex flex-col gap-[4px] items-start left-[30px]" data-name="Social Content">
              <div className="content-stretch flex flex-col items-start justify-center relative shrink-0 w-[95px]" data-name="Title">
                <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
                  <div className="flex flex-col font-['Poppins:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#4e4e4e] text-[15px] tracking-[-0.3px] whitespace-nowrap">
                    <p className="leading-[21px]">{`Let's connect`}</p>
                  </div>
                </div>
              </div>
              <div className="content-stretch flex items-start relative shrink-0" data-name="Social Link  Button">
                <div className="content-stretch flex items-center justify-center overflow-clip p-[4px] relative rounded-[4px] shrink-0" data-name="Link - Button">
                  <div className="content-stretch flex flex-col items-start justify-center relative shrink-0 size-[24px]" data-name="Container">
                    <div className="h-[24px] overflow-clip relative shrink-0 w-full" data-name="SVG">
                      <div className="absolute contents inset-[12.5%_15.63%_12.45%_15.6%]" data-name="Group">
                        <div className="absolute inset-[12.5%_15.63%_12.45%_15.6%]" data-name="Vector">
                          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.5058 18.0113">
                            <path d={svgPaths.p1f630600} fill="var(--fill-0, black)" id="Vector" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="content-stretch flex items-center justify-center overflow-clip p-[4px] relative rounded-[4px] shrink-0" data-name="Link - Button">
                  <div className="content-stretch flex flex-col items-start justify-center relative shrink-0 size-[24px]" data-name="Container">
                    <div className="h-[24px] overflow-clip relative shrink-0 w-full" data-name="SVG">
                      <div className="absolute contents inset-[12.5%_18.74%_3.12%_18.74%]" data-name="Group">
                        <div className="absolute inset-[12.5%_18.74%_3.12%_18.74%]" data-name="Vector">
                          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.0035 20.2506">
                            <path d={svgPaths.p304e0d00} fill="var(--fill-0, black)" id="Vector" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="content-stretch flex items-center justify-center overflow-clip p-[4px] relative rounded-[4px] shrink-0" data-name="Link - Button">
                  <div className="content-stretch flex flex-col items-start justify-center relative shrink-0 size-[24px]" data-name="Container">
                    <div className="h-[24px] overflow-clip relative shrink-0 w-full" data-name="SVG">
                      <div className="absolute contents inset-[9.38%_9.38%_9.37%_9.37%]" data-name="Group">
                        <Vector additionalClassNames="inset-[9.38%_9.38%_9.37%_9.37%]">
                          <path d={svgPaths.p1a3fcf40} fill="var(--fill-0, black)" id="Vector" />
                        </Vector>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="content-stretch flex items-center justify-center overflow-clip p-[4px] relative rounded-[4px] shrink-0" data-name="Link - Button">
                  <div className="content-stretch flex flex-col items-start justify-center relative shrink-0 size-[24px]" data-name="Container">
                    <div className="h-[24px] overflow-clip relative shrink-0 w-full" data-name="SVG">
                      <div className="absolute contents inset-[9.38%]" data-name="Group">
                        <Vector additionalClassNames="inset-[9.38%]">
                          <path d={svgPaths.p15506800} fill="var(--fill-0, black)" id="Vector" />
                        </Vector>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute content-stretch flex flex-col items-center justify-center left-0 p-[30px] right-0 rounded-[40px] top-[7029.22px]" data-name="Footer">
          <div className="absolute bg-black inset-[30px] rounded-[16px]" data-name="BG" />
          <div className="max-w-[1500px] relative shrink-0 w-full" data-name="Container">
            <div className="flex flex-col items-center max-w-[inherit] size-full">
              <div className="content-stretch flex flex-col gap-[119px] items-center max-w-[inherit] p-[30px] relative w-full">
                <div className="relative rounded-[12px] shrink-0 w-full" data-name="CTA">
                  <div className="flex flex-col items-center justify-center size-full">
                    <div className="content-stretch flex flex-col gap-[24px] items-center justify-center px-[20px] py-[80px] relative w-full">
                      <div className="content-stretch flex flex-col items-start justify-center relative shrink-0 w-[870.39px]" data-name="Title">
                        <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Heading 1">
                          <div className="flex flex-col font-['Poppins:SemiBold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[80px] text-center text-white tracking-[-4.8px] whitespace-nowrap">
                            <p className="leading-[96px]">Start a project</p>
                          </div>
                        </div>
                      </div>
                      <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
                        <div className="bg-[#05f] content-stretch flex gap-[8px] items-center justify-center p-[8px] relative rounded-[99px] shrink-0" data-name="Link - L">
                          <Icon>
                            <div className="aspect-[18/18] content-stretch flex flex-col items-start justify-center relative w-full" data-name="Arrow-right">
                              <Svg />
                            </div>
                          </Icon>
                          <div className="content-stretch flex items-center justify-center pr-[12px] relative shrink-0" data-name="Text">
                            <div className="content-stretch flex flex-col items-start relative shrink-0 w-[108px]" data-name="Button">
                              <ContainerText1 text="Get In Touch" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="relative shrink-0 w-full" data-name="Navigation">
                  <div className="content-stretch flex gap-[419.97px] items-start pl-[209.98px] pr-[209.99px] relative w-full">
                    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0" data-name="Contact">
                      <div className="content-stretch flex flex-col items-start relative shrink-0 w-[124px]" data-name="Container">
                        <ContainerText4 text="+49 160 1234567" />
                      </div>
                      <div className="content-stretch flex flex-col items-start relative shrink-0 w-[253px]" data-name="Container">
                        <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 4">
                          <div className="flex flex-col font-['Poppins:SemiBold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[32px] text-white tracking-[-1.28px] whitespace-nowrap">
                            <p className="leading-[38.4px]">hello@Martha.id</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="content-stretch flex gap-[72.01px] items-start justify-end pr-[40px] relative shrink-0" data-name="Links">
                      <div className="content-stretch flex flex-col gap-[7px] items-start relative shrink-0" data-name="Page Link">
                        <div className="content-stretch flex flex-col items-start relative shrink-0 w-[47px]" data-name="Container">
                          <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
                            <div className="flex flex-col font-['Poppins:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[0px] text-white tracking-[-0.48px] whitespace-nowrap">
                              <p className="leading-[22.4px] text-[16px]">Home</p>
                            </div>
                          </div>
                        </div>
                        <div className="content-stretch flex flex-col items-start relative shrink-0 w-[61px]" data-name="Container">
                          <ContainerText4 text="Projects" />
                        </div>
                        <div className="content-stretch flex flex-col items-start relative shrink-0 w-[63px]" data-name="Container">
                          <ContainerText4 text="Contact" />
                        </div>
                      </div>
                      <div className="content-stretch flex flex-col gap-[7px] items-start relative shrink-0" data-name="Page Link">
                        <div className="content-stretch flex flex-col items-start relative shrink-0 w-[11px]" data-name="Container">
                          <ContainerText4 text="X" />
                        </div>
                        <div className="content-stretch flex flex-col items-start relative shrink-0 w-[56px]" data-name="Container">
                          <ContainerText4 text="Framer" />
                        </div>
                        <div className="content-stretch flex flex-col items-start relative shrink-0 w-[54px]" data-name="Container">
                          <ContainerText4 text="Contra" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="relative shrink-0 w-full" data-name="Copyright">
                  <div className="flex flex-row items-center size-full">
                    <div className="content-stretch flex items-center justify-between pr-[0.02px] pt-px relative w-full">
                      <div className="content-stretch flex flex-col items-start justify-center relative shrink-0 w-[177px]" data-name="Container">
                        <ContainerText5 text="All right reserved © 2025" />
                      </div>
                      <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Back To Top">
                        <div className="content-stretch flex items-center overflow-clip relative shrink-0" data-name="Link - Default">
                          <div className="content-stretch flex flex-col items-start relative shrink-0 w-[83px]" data-name="Container">
                            <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
                              <div className="flex flex-col font-['Poppins:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#a2a2a2] text-[15px] tracking-[-0.3px] whitespace-nowrap">
                                <p className="leading-[21px]">Back to top</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="content-stretch flex gap-[8px] items-center justify-center relative shrink-0" data-name="Credit">
                        <div className="content-stretch flex flex-col items-start relative shrink-0 w-[64px]" data-name="Container">
                          <ContainerText5 text="Made by" />
                        </div>
                        <div className="content-stretch flex flex-col items-start relative shrink-0 w-[62px]" data-name="Container">
                          <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
                            <div className="flex flex-col font-['Poppins:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[15px] text-white tracking-[-0.3px] whitespace-nowrap">
                              <p className="leading-[21px]">Herya W</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
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
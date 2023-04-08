const ValueCard = (props) => {
  const { title, children } = props;

  return (
    <div className="flex flex-col rounded-xl p-4 w-full max-w-sm shadow-custom">
      <span className="text-xl font-semibold underline decoration-emerald-400 underline-offset-4 decoration-2 mb-2">{title}</span>
      <div className="text-lg mx-4">
        {children}
      </div>
    </div>
  );
};

export const valueCardInfo = [
  {
    title: "Mission",
    content: (
      <span>
        A Sip of Paradise Garden provides horticultural therapy, employment
        resources, and health and wellness programs for bartenders and the
        greater hospitality community to recharge recharge their minds, bodies,
        and spirits
      </span>
    ),
  },
  {
    title: "Vision",
    content: (
      <span>
        We envision a community of hospitality professionals that will maintain
        economic independence and access to sustainable food sources to help
        transform their wellness and improve their quality of life
      </span>
    ),
  },
  {
    title: "Value",
    content: (
      <ul className="list-disc text-left">
        <li>
          To improve the mental and physical health of members through wellness
          and wraparound support.
        </li>
        <li>
          To stabilize and empower members and their families through
          socio-economic growth and development.
        </li>
        <li>
          To strengthen the hospitality community through outdoor gardening and
          beautification for the betterment of the overall Atlanta Metropolitan
          Area.
        </li>
      </ul>
    ),
  },
];

export default ValueCard;

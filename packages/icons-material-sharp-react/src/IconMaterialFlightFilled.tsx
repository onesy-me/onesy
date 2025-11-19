import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialFlightFilled = (props: IIcon) => {

  return (
    <Icon
      name='FlightFilled'

      short_name='Flight'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M340-80v-60l80-60v-220L80-320v-80l340-200v-220q0-25 17.5-42.5T480-880q25 0 42.5 17.5T540-820v220l340 200v80L540-420v220l80 60v60l-140-40-140 40Z"/>
    </Icon>
  );
};

IconMaterialFlightFilled.displayName = 'OnesyIconMaterialFlightFilled';

export default IconMaterialFlightFilled;

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialHrRestingFilled = (props: IIcon) => {

  return (
    <Icon
      name='HrRestingFilled'

      short_name='HrResting'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M120-120v-80h720v80H120Zm97-384q-29-27-42.5-64T161-644q0-81 55.5-138.5T352-840q36 0 69 13t59 38q26-25 59-38t69-13q81 0 136.5 58T800-643q0 39-14.5 74.5T744-505L480-249 217-504Z"/>
    </Icon>
  );
};

IconMaterialHrRestingFilled.displayName = 'OnesyIconMaterialHrRestingFilled';

export default IconMaterialHrRestingFilled;

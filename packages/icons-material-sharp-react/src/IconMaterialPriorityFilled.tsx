import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialPriorityFilled = (props: IIcon) => {

  return (
    <Icon
      name='PriorityFilled'

      short_name='Priority'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M360-120q-100 0-170-70t-70-170v-240q0-100 70-170t170-70h240q100 0 170 70t70 170v240q0 100-70 170t-170 70H360Zm80-200 240-240-56-56-184 184-88-88-56 56 144 144Z"/>
    </Icon>
  );
};

IconMaterialPriorityFilled.displayName = 'OnesyIconMaterialPriorityFilled';

export default IconMaterialPriorityFilled;

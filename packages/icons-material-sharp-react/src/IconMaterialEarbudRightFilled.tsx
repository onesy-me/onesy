import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialEarbudRightFilled = (props: IIcon) => {

  return (
    <Icon
      name='EarbudRightFilled'

      short_name='EarbudRight'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-80v-720h360v320H720v400H480ZM360-400q-100 0-170-70t-70-170q0-100 70-170t170-70h40v480h-40Z"/>
    </Icon>
  );
};

IconMaterialEarbudRightFilled.displayName = 'OnesyIconMaterialEarbudRightFilled';

export default IconMaterialEarbudRightFilled;

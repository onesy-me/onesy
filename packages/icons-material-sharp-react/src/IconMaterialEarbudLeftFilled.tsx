import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialEarbudLeftFilled = (props: IIcon) => {

  return (
    <Icon
      name='EarbudLeftFilled'

      short_name='EarbudLeft'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M240-80v-400H120v-320h360v720H240Zm320-320v-480h40q100 0 170 70t70 170q0 100-70 170t-170 70h-40Z"/>
    </Icon>
  );
};

IconMaterialEarbudLeftFilled.displayName = 'OnesyIconMaterialEarbudLeftFilled';

export default IconMaterialEarbudLeftFilled;

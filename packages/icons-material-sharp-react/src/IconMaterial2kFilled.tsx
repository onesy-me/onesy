import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterial2kFilled = (props: IIcon) => {

  return (
    <Icon
      name='2kFilled'

      short_name='2k'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M520-360h60v-90l70 90h70l-90-120 90-120h-70l-70 90v-90h-60v240Zm-260 0h180v-60H320v-40h120v-140H260v60h120v40H260v140ZM120-120v-720h720v720H120Z"/>
    </Icon>
  );
};

IconMaterial2kFilled.displayName = 'OnesyIconMaterial2kFilled';

export default IconMaterial2kFilled;

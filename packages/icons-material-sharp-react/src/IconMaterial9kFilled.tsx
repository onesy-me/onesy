import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterial9kFilled = (props: IIcon) => {

  return (
    <Icon
      name='9kFilled'

      short_name='9k'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M260-360h180v-240H260v140h120v40H260v60Zm60-140v-60h60v60h-60Zm200 140h60v-90l70 90h70l-90-120 90-120h-70l-70 90v-90h-60v240ZM120-120v-720h720v720H120Z"/>
    </Icon>
  );
};

IconMaterial9kFilled.displayName = 'OnesyIconMaterial9kFilled';

export default IconMaterial9kFilled;

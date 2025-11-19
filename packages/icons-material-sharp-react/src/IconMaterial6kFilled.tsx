import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterial6kFilled = (props: IIcon) => {

  return (
    <Icon
      name='6kFilled'

      short_name='6k'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M520-360h60v-90l70 90h70l-90-120 90-120h-70l-70 90v-90h-60v240Zm-260 0h180v-140H320v-40h120v-60H260v240Zm60-40v-60h60v60h-60ZM120-120v-720h720v720H120Z"/>
    </Icon>
  );
};

IconMaterial6kFilled.displayName = 'OnesyIconMaterial6kFilled';

export default IconMaterial6kFilled;

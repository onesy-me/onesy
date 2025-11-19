import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialThumbUpFilled = (props: IIcon) => {

  return (
    <Icon
      name='ThumbUpFilled'

      short_name='ThumbUp'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M840-640q32 0 56 24t24 56v80q0 7-1.5 15t-4.5 15L794-168q-9 20-30 34t-44 14H400q-33 0-56.5-23.5T320-200v-407q0-16 6.5-30.5T344-663l217-216q15-14 35.5-17t39.5 7q19 10 27.5 28t3.5 37l-45 184h218ZM160-120q-33 0-56.5-23.5T80-200v-360q0-33 23.5-56.5T160-640q33 0 56.5 23.5T240-560v360q0 33-23.5 56.5T160-120Z"/>
    </Icon>
  );
};

IconMaterialThumbUpFilled.displayName = 'OnesyIconMaterialThumbUpFilled';

export default IconMaterialThumbUpFilled;

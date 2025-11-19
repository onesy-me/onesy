import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialLocalBarFilled = (props: IIcon) => {

  return (
    <Icon
      name='LocalBarFilled'

      short_name='LocalBar'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M240-120v-80h200v-200L120-760v-80h720v80L520-400v200h200v80H240Zm58-560h364l72-80H226l72 80Z"/>
    </Icon>
  );
};

IconMaterialLocalBarFilled.displayName = 'OnesyIconMaterialLocalBarFilled';

export default IconMaterialLocalBarFilled;

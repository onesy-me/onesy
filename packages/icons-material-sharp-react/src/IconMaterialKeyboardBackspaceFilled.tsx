import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialKeyboardBackspaceFilled = (props: IIcon) => {

  return (
    <Icon
      name='KeyboardBackspaceFilled'

      short_name='KeyboardBackspace'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M360-240 120-480l240-240 56 56-144 144h568v80H272l144 144-56 56Z"/>
    </Icon>
  );
};

IconMaterialKeyboardBackspaceFilled.displayName = 'OnesyIconMaterialKeyboardBackspaceFilled';

export default IconMaterialKeyboardBackspaceFilled;

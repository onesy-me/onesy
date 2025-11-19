import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialScreenshotKeyboardFilled = (props: IIcon) => {

  return (
    <Icon
      name='ScreenshotKeyboardFilled'

      short_name='ScreenshotKeyboard'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-480Zm0 160q66 0 113-47t47-113q0-66-47-113t-113-47q-66 0-113 47t-47 113q0 66 47 113t113 47ZM80-160v-640h800v640H80Z"/>
    </Icon>
  );
};

IconMaterialScreenshotKeyboardFilled.displayName = 'OnesyIconMaterialScreenshotKeyboardFilled';

export default IconMaterialScreenshotKeyboardFilled;

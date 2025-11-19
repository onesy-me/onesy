import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialShareWindows = (props: IIcon) => {

  return (
    <Icon
      name='ShareWindows'

      short_name='ShareWindows'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M280-360v-320h406L583-783l57-57 200 200-200 200-57-56 103-104H360v240h-80ZM120-120v-680h80v600h480v-160h80v240H120Z"/>
    </Icon>
  );
};

IconMaterialShareWindows.displayName = 'OnesyIconMaterialShareWindows';

export default IconMaterialShareWindows;

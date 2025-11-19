import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialBackspaceW100 = (props: IIcon) => {

  return (
    <Icon
      name='BackspaceW100'

      short_name='Backspace'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M333-252 172-480l163-228h453v456H333Zm16-28h411v-400H349L206-480l143 200Zm89-76 104-104 104 104 20-20-104-104 104-104-20-20-104 104-104-104-20 20 104 104-104 104 20 20Zm322 76v-400 400Z"/>
    </Icon>
  );
};

IconMaterialBackspaceW100.displayName = 'OnesyIconMaterialBackspaceW100';

export default IconMaterialBackspaceW100;

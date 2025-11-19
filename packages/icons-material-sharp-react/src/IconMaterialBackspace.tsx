import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialBackspace = (props: IIcon) => {

  return (
    <Icon
      name='Backspace'

      short_name='Backspace'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M318-200 120-480l198-280h522v560H318Zm42-80h400v-400H360L218-480l142 200Zm96-40 104-104 104 104 56-56-104-104 104-104-56-56-104 104-104-104-56 56 104 104-104 104 56 56Zm304 40v-400 400Z"/>
    </Icon>
  );
};

IconMaterialBackspace.displayName = 'OnesyIconMaterialBackspace';

export default IconMaterialBackspace;

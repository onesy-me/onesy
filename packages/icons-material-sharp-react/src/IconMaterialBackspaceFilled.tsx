import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialBackspaceFilled = (props: IIcon) => {

  return (
    <Icon
      name='BackspaceFilled'

      short_name='Backspace'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M318-200 120-480l198-280h522v560H318Zm138-120 104-104 104 104 56-56-104-104 104-104-56-56-104 104-104-104-56 56 104 104-104 104 56 56Z"/>
    </Icon>
  );
};

IconMaterialBackspaceFilled.displayName = 'OnesyIconMaterialBackspaceFilled';

export default IconMaterialBackspaceFilled;

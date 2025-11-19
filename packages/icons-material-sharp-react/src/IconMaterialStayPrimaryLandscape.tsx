import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialStayPrimaryLandscape = (props: IIcon) => {

  return (
    <Icon
      name='StayPrimaryLandscape'

      short_name='StayPrimaryLandscape'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M40-200v-560h880v560H40Zm120-80v-400h-40v400h40Zm80 0h480v-400H240v400Zm560 0h40v-400h-40v400ZM160-680h-40 40Zm640 0h40-40Z"/>
    </Icon>
  );
};

IconMaterialStayPrimaryLandscape.displayName = 'OnesyIconMaterialStayPrimaryLandscape';

export default IconMaterialStayPrimaryLandscape;

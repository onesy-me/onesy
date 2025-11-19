import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialSelectWindow = (props: IIcon) => {

  return (
    <Icon
      name='SelectWindow'

      short_name='SelectWindow'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M80-80v-520h160v-280h640v520H720v280H80Zm80-80h480v-280H160v280Zm560-280h80v-280H320v120h400v160Z"/>
    </Icon>
  );
};

IconMaterialSelectWindow.displayName = 'OnesyIconMaterialSelectWindow';

export default IconMaterialSelectWindow;

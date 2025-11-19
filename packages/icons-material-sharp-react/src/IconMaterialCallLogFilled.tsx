import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialCallLogFilled = (props: IIcon) => {

  return (
    <Icon
      name='CallLogFilled'

      short_name='CallLog'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M758-80q-125 0-247.5-54T288-288Q188-388 134-510T80-758v-42h236l37 201-114 115q22 39 49 74t58 65q29 29 63.5 55.5T484-240l116-116 200 41v235h-42ZM480-800v-80h400v80H480Zm0 160v-80h400v80H480Zm0 160v-80h400v80H480Z"/>
    </Icon>
  );
};

IconMaterialCallLogFilled.displayName = 'OnesyIconMaterialCallLogFilled';

export default IconMaterialCallLogFilled;

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialCancelPresentation = (props: IIcon) => {

  return (
    <Icon
      name='CancelPresentation'

      short_name='CancelPresentation'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m424-480-76 76q-11 11-11 28t11 28q11 11 28 11t28-11l76-76 76 76q11 11 28 11t28-11q11-11 11-28t-11-28l-76-76 76-76q11-11 11-28t-11-28q-11-11-28-11t-28 11l-76 76-76-76q-11-11-28-11t-28 11q-11 11-11 28t11 28l76 76ZM160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720v480q0 33-23.5 56.5T800-160H160Zm0-80h640v-480H160v480Zm0 0v-480 480Z"/>
    </Icon>
  );
};

IconMaterialCancelPresentation.displayName = 'OnesyIconMaterialCancelPresentation';

export default IconMaterialCancelPresentation;

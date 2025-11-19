import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialViewStream = (props: IIcon) => {

  return (
    <Icon
      name='ViewStream'

      short_name='ViewStream'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M760-280v-160H200v160h560Zm0-240v-160H200v160h560ZM200-200q-33 0-56.5-23.5T120-280v-400q0-33 23.5-56.5T200-760h560q33 0 56.5 23.5T840-680v400q0 33-23.5 56.5T760-200H200Z"/>
    </Icon>
  );
};

IconMaterialViewStream.displayName = 'OnesyIconMaterialViewStream';

export default IconMaterialViewStream;

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialSpeaker = (props: IIcon) => {

  return (
    <Icon
      name='Speaker'

      short_name='Speaker'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M760-80H200v-800h560v800Zm-80-80v-640H280v640h400ZM480-600q33 0 56.5-23.5T560-680q0-33-23.5-56.5T480-760q-33 0-56.5 23.5T400-680q0 33 23.5 56.5T480-600Zm0 400q66 0 113-47t47-113q0-66-47-113t-113-47q-66 0-113 47t-47 113q0 66 47 113t113 47Zm0-80q-33 0-56.5-23.5T400-360q0-33 23.5-56.5T480-440q33 0 56.5 23.5T560-360q0 33-23.5 56.5T480-280ZM280-800v640-640Z"/>
    </Icon>
  );
};

IconMaterialSpeaker.displayName = 'OnesyIconMaterialSpeaker';

export default IconMaterialSpeaker;

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialPhonelinkLock = (props: IIcon) => {

  return (
    <Icon
      name='PhonelinkLock'

      short_name='PhonelinkLock'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M600-320v-200h40v-40q0-33 23.5-56.5T720-640q33 0 56.5 23.5T800-560v40h40v200H600Zm80-200h80v-40q0-17-11.5-28.5T720-600q-17 0-28.5 11.5T680-560v40ZM200-40v-880h560v240h-80v-40H280v480h400v-40h80v240H200Zm80-120v40h400v-40H280Zm0-640h400v-40H280v40Zm0 0v-40 40Zm0 640v40-40Z"/>
    </Icon>
  );
};

IconMaterialPhonelinkLock.displayName = 'OnesyIconMaterialPhonelinkLock';

export default IconMaterialPhonelinkLock;

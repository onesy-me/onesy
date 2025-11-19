import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialSirenOpenFilled = (props: IIcon) => {

  return (
    <Icon
      name='SirenOpenFilled'

      short_name='SirenOpen'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M720-40q-83 0-141.5-58.5T520-240q0-83 58.5-141.5T720-440q83 0 141.5 58.5T920-240q0 83-58.5 141.5T720-40Zm-72-100 112-112v92h40v-160H640v40h92L620-168l28 28ZM80-120v-240h120v-200q0-117 81.5-198.5T480-840q117 0 198.5 81.5T760-560v43q-10-2-19.5-2.5T720-520q-116 0-198 81.5T440-240q0 31 6.5 61.5T467-120H80Zm240-320h80v-120q0-33 23.5-56.5T480-640v-80q-66 0-113 47t-47 113v120Z"/>
    </Icon>
  );
};

IconMaterialSirenOpenFilled.displayName = 'OnesyIconMaterialSirenOpenFilled';

export default IconMaterialSirenOpenFilled;

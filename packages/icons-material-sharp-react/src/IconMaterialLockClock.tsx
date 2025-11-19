import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialLockClock = (props: IIcon) => {

  return (
    <Icon
      name='LockClock'

      short_name='LockClock'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M360-640h240v-80q0-50-35-85t-85-35q-50 0-85 35t-35 85v80ZM490-80H160v-560h120v-80q0-83 58.5-141.5T480-920q83 0 141.5 58.5T680-720v80h120v132q-18-6-37.5-9t-42.5-3v-40H240v400h212q8 24 16 41.5T490-80Zm230 40q-83 0-141.5-58.5T520-240q0-83 58.5-141.5T720-440q83 0 141.5 58.5T920-240q0 83-58.5 141.5T720-40Zm66-106 28-28-74-74v-112h-40v128l86 86ZM240-560v400-400Z"/>
    </Icon>
  );
};

IconMaterialLockClock.displayName = 'OnesyIconMaterialLockClock';

export default IconMaterialLockClock;

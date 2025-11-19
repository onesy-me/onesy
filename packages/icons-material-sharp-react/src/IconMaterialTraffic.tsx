import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialTraffic = (props: IIcon) => {

  return (
    <Icon
      name='Traffic'

      short_name='Traffic'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-240q26 0 43-17t17-43q0-26-17-43t-43-17q-26 0-43 17t-17 43q0 26 17 43t43 17Zm0-180q26 0 43-17t17-43q0-26-17-43t-43-17q-26 0-43 17t-17 43q0 26 17 43t43 17Zm0-180q26 0 43-17t17-43q0-26-17-43t-43-17q-26 0-43 17t-17 43q0 26 17 43t43 17ZM280-120v-86q-51-14-85.5-56T160-360h120v-46q-51-14-85.5-56T160-560h120v-46q-51-14-85.5-56T160-760h120v-80h400v80h120q0 56-34.5 98T680-606v46h120q0 56-34.5 98T680-406v46h120q0 56-34.5 98T680-206v86H280Zm80-80h240v-560H360v560Zm0 0v-560 560Z"/>
    </Icon>
  );
};

IconMaterialTraffic.displayName = 'OnesyIconMaterialTraffic';

export default IconMaterialTraffic;

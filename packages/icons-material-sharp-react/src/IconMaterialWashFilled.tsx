import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialWashFilled = (props: IIcon) => {

  return (
    <Icon
      name='WashFilled'

      short_name='Wash'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M760-80H80v-441l385-250 65 65-78 126h348v80H480v60h400v80H480v60h360v80H480v60h280v80Zm-60-560q-39 0-69.5-30.5T600-740q0-35 23-77.5T700-920q54 60 77 102.5t23 77.5q0 39-30.5 69.5T700-640Z"/>
    </Icon>
  );
};

IconMaterialWashFilled.displayName = 'OnesyIconMaterialWashFilled';

export default IconMaterialWashFilled;

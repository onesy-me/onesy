import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialInboxTextAsterisk = (props: IIcon) => {

  return (
    <Icon
      name='InboxTextAsterisk'

      short_name='InboxTextAsterisk'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M120-120v-720h720v306q-19-9-39-14.5t-41-8.5v-203H200v360h168q9 27 30 47t47 28q-3 20-4 40.5t2 40.5q-36-7-67.5-26.5T320-320H200v120h253q7 22 16 42t22 38H120Zm80-80h253-253Zm80-410h400v-80H280v80Zm0 140h237q27-29 60.5-49t72.5-31H280v80Zm378 343-64-47 61-85-99-32 24-77 100 33v-105h80v105l100-33 24 77-99 32 61 85-64 47-62-85-62 85Z"/>
    </Icon>
  );
};

IconMaterialInboxTextAsterisk.displayName = 'OnesyIconMaterialInboxTextAsterisk';

export default IconMaterialInboxTextAsterisk;

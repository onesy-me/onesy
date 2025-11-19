import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialCreditScore = (props: IIcon) => {

  return (
    <Icon
      name='CreditScore'

      short_name='CreditScore'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M160-640h640v-80H160v80ZM80-160v-640h800v320H160v240h164v80H80Zm518 80L428-250l56-56 114 112 226-226 56 58L598-80ZM160-240v-180 113-413 480Z"/>
    </Icon>
  );
};

IconMaterialCreditScore.displayName = 'OnesyIconMaterialCreditScore';

export default IconMaterialCreditScore;

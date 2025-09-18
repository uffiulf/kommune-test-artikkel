import React from 'react';
import { Shield, AlertTriangle, Phone, Info } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';

const CalloutBox = ({ type, title, content, source }) => {
  const getIcon = () => {
    switch (type) {
      case 'warning':
        return <AlertTriangle className="w-6 h-6" />;
      case 'advice':
        return <Shield className="w-6 h-6" />;
      case 'contact':
        return <Phone className="w-6 h-6" />;
      default:
        return <Info className="w-6 h-6" />;
    }
  };

  const getStyles = () => {
    switch (type) {
      case 'warning':
        return {
          card: 'border-l-4 border-red-500 bg-red-50',
          header: 'text-red-800',
          icon: 'text-red-600',
          content: 'text-red-700'
        };
      case 'advice':
        return {
          card: 'border-l-4 border-green-500 bg-green-50',
          header: 'text-green-800',
          icon: 'text-green-600',
          content: 'text-green-700'
        };
      case 'contact':
        return {
          card: 'border-l-4 border-blue-500 bg-blue-50',
          header: 'text-blue-800',
          icon: 'text-blue-600',
          content: 'text-blue-700'
        };
      default:
        return {
          card: 'border-l-4 border-gray-500 bg-gray-50',
          header: 'text-gray-800',
          icon: 'text-gray-600',
          content: 'text-gray-700'
        };
    }
  };

  const styles = getStyles();

  return (
    <Card className={`${styles.card} shadow-md hover:shadow-lg transition-shadow duration-300`}>
      <CardHeader className="pb-3">
        <CardTitle className={`flex items-center gap-3 ${styles.header}`}>
          <span className={styles.icon}>{getIcon()}</span>
          <span className="font-bold">{title}</span>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className={`${styles.content} space-y-3`}>
          {Array.isArray(content) ? (
            <ul className="space-y-2">
              {content.map((item, index) => (
                <li key={index} className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 bg-current rounded-full mt-2 flex-shrink-0"></span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          ) : (
            <p className="leading-relaxed">{content}</p>
          )}
          {source && (
            <p className="text-sm font-medium mt-4 pt-3 border-t border-current/20">
              – {source}
            </p>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default CalloutBox;
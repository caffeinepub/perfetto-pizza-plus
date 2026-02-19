import { useState } from 'react';
import { Calendar, Clock, Users, MessageSquare } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';

interface FormData {
  fullName: string;
  mobile: string;
  email: string;
  guests: string;
  date: string;
  time: string;
  occasion: string;
  specialRequest: string;
}

interface FormErrors {
  fullName?: string;
  mobile?: string;
  guests?: string;
  date?: string;
  time?: string;
  occasion?: string;
}

export default function ReservationSection() {
  const [formData, setFormData] = useState<FormData>({
    fullName: '',
    mobile: '',
    email: '',
    guests: '',
    date: '',
    time: '',
    occasion: '',
    specialRequest: '',
  });

  const [errors, setErrors] = useState<FormErrors>({});

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Full name is required';
    }

    if (!formData.mobile.trim()) {
      newErrors.mobile = 'Mobile number is required';
    } else if (!/^\d{10}$/.test(formData.mobile.replace(/\s/g, ''))) {
      newErrors.mobile = 'Please enter a valid 10-digit mobile number';
    }

    if (!formData.guests) {
      newErrors.guests = 'Number of guests is required';
    }

    if (!formData.date) {
      newErrors.date = 'Reservation date is required';
    }

    if (!formData.time) {
      newErrors.time = 'Reservation time is required';
    }

    if (!formData.occasion) {
      newErrors.occasion = 'Occasion is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const formatDate = (dateString: string): string => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  const formatTime = (timeString: string): string => {
    const [hours, minutes] = timeString.split(':');
    const hour = parseInt(hours);
    const ampm = hour >= 12 ? 'PM' : 'AM';
    const displayHour = hour % 12 || 12;
    return `${displayHour}:${minutes} ${ampm}`;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    // Construct WhatsApp message
    const message = `Hello Perfetto Pizza Plus,

New Table Reservation Request:

Name: ${formData.fullName}
Mobile: ${formData.mobile}
Email: ${formData.email || 'Not provided'}
Guests: ${formData.guests}
Date: ${formatDate(formData.date)}
Time: ${formatTime(formData.time)}
Occasion: ${formData.occasion}
Special Request: ${formData.specialRequest || 'None'}

Please confirm my reservation. Thank you.`;

    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/919797957878?text=${encodedMessage}`;
    
    window.open(whatsappUrl, '_blank');
  };

  const handleInputChange = (field: keyof FormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    // Clear error when user starts typing
    if (errors[field as keyof FormErrors]) {
      setErrors(prev => ({ ...prev, [field]: undefined }));
    }
  };

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-charcoal mb-4 font-display">
              Reserve Your Table
            </h2>
            <p className="text-soft-charcoal text-lg">
              Book your perfect dining experience with us
            </p>
          </div>

          {/* Reservation Form */}
          <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-elegant-lg p-8 md:p-10 border border-gold/20">
            <div className="space-y-6">
              {/* Full Name */}
              <div>
                <Label htmlFor="fullName" className="text-charcoal font-semibold mb-2 block">
                  Full Name <span className="text-red-600">*</span>
                </Label>
                <Input
                  id="fullName"
                  type="text"
                  value={formData.fullName}
                  onChange={(e) => handleInputChange('fullName', e.target.value)}
                  placeholder="Enter your full name"
                  className={`border-gold/30 focus:border-gold ${errors.fullName ? 'border-red-500' : ''}`}
                />
                {errors.fullName && (
                  <p className="text-red-600 text-sm mt-1">{errors.fullName}</p>
                )}
              </div>

              {/* Mobile Number */}
              <div>
                <Label htmlFor="mobile" className="text-charcoal font-semibold mb-2 block">
                  Mobile Number <span className="text-red-600">*</span>
                </Label>
                <Input
                  id="mobile"
                  type="tel"
                  value={formData.mobile}
                  onChange={(e) => handleInputChange('mobile', e.target.value)}
                  placeholder="Enter your mobile number"
                  className={`border-gold/30 focus:border-gold ${errors.mobile ? 'border-red-500' : ''}`}
                />
                {errors.mobile && (
                  <p className="text-red-600 text-sm mt-1">{errors.mobile}</p>
                )}
              </div>

              {/* Email Address */}
              <div>
                <Label htmlFor="email" className="text-charcoal font-semibold mb-2 block">
                  Email Address <span className="text-soft-charcoal text-sm">(Optional)</span>
                </Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleInputChange('email', e.target.value)}
                  placeholder="Enter your email address"
                  className="border-gold/30 focus:border-gold"
                />
              </div>

              {/* Number of Guests */}
              <div>
                <Label htmlFor="guests" className="text-charcoal font-semibold mb-2 block">
                  Number of Guests <span className="text-red-600">*</span>
                </Label>
                <Select value={formData.guests} onValueChange={(value) => handleInputChange('guests', value)}>
                  <SelectTrigger className={`border-gold/30 focus:border-gold ${errors.guests ? 'border-red-500' : ''}`}>
                    <Users className="w-4 h-4 mr-2 text-gold" />
                    <SelectValue placeholder="Select number of guests" />
                  </SelectTrigger>
                  <SelectContent>
                    {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
                      <SelectItem key={num} value={num.toString()}>
                        {num} {num === 1 ? 'Guest' : 'Guests'}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                {errors.guests && (
                  <p className="text-red-600 text-sm mt-1">{errors.guests}</p>
                )}
              </div>

              {/* Date and Time Row */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Reservation Date */}
                <div>
                  <Label htmlFor="date" className="text-charcoal font-semibold mb-2 block">
                    Reservation Date <span className="text-red-600">*</span>
                  </Label>
                  <div className="relative">
                    <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gold pointer-events-none" />
                    <Input
                      id="date"
                      type="date"
                      value={formData.date}
                      onChange={(e) => handleInputChange('date', e.target.value)}
                      min={new Date().toISOString().split('T')[0]}
                      className={`pl-10 border-gold/30 focus:border-gold ${errors.date ? 'border-red-500' : ''}`}
                    />
                  </div>
                  {errors.date && (
                    <p className="text-red-600 text-sm mt-1">{errors.date}</p>
                  )}
                </div>

                {/* Reservation Time */}
                <div>
                  <Label htmlFor="time" className="text-charcoal font-semibold mb-2 block">
                    Reservation Time <span className="text-red-600">*</span>
                  </Label>
                  <div className="relative">
                    <Clock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gold pointer-events-none" />
                    <Input
                      id="time"
                      type="time"
                      value={formData.time}
                      onChange={(e) => handleInputChange('time', e.target.value)}
                      className={`pl-10 border-gold/30 focus:border-gold ${errors.time ? 'border-red-500' : ''}`}
                    />
                  </div>
                  {errors.time && (
                    <p className="text-red-600 text-sm mt-1">{errors.time}</p>
                  )}
                </div>
              </div>

              {/* Occasion */}
              <div>
                <Label htmlFor="occasion" className="text-charcoal font-semibold mb-2 block">
                  Occasion <span className="text-red-600">*</span>
                </Label>
                <Select value={formData.occasion} onValueChange={(value) => handleInputChange('occasion', value)}>
                  <SelectTrigger className={`border-gold/30 focus:border-gold ${errors.occasion ? 'border-red-500' : ''}`}>
                    <MessageSquare className="w-4 h-4 mr-2 text-gold" />
                    <SelectValue placeholder="Select occasion" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Birthday">Birthday</SelectItem>
                    <SelectItem value="Anniversary">Anniversary</SelectItem>
                    <SelectItem value="Casual Visit">Casual Visit</SelectItem>
                    <SelectItem value="Party">Party</SelectItem>
                    <SelectItem value="Other">Other</SelectItem>
                  </SelectContent>
                </Select>
                {errors.occasion && (
                  <p className="text-red-600 text-sm mt-1">{errors.occasion}</p>
                )}
              </div>

              {/* Special Request */}
              <div>
                <Label htmlFor="specialRequest" className="text-charcoal font-semibold mb-2 block">
                  Special Request <span className="text-soft-charcoal text-sm">(Optional)</span>
                </Label>
                <Textarea
                  id="specialRequest"
                  value={formData.specialRequest}
                  onChange={(e) => handleInputChange('specialRequest', e.target.value)}
                  placeholder="Any special requests or dietary requirements?"
                  rows={4}
                  className="border-gold/30 focus:border-gold resize-none"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-4 px-6 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl text-lg flex items-center justify-center gap-2"
              >
                <span>👉</span>
                <span>Reserve Now</span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
